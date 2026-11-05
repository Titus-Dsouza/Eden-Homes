import assert from 'node:assert/strict'
import { readFileSync, readdirSync, statSync } from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import vm from 'node:vm'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = fileURLToPath(new URL('../', import.meta.url))
const pages = [
  'index.html',
  'accommodation/1-bhk.html',
  'accommodation/2-bhk.html',
  'boating/index.html',
]

function resolveLocalReference(page, reference) {
  if (
    reference.startsWith('#') ||
    reference.startsWith('mailto:') ||
    reference.startsWith('tel:') ||
    /^[a-z][a-z\d+.-]*:/i.test(reference)
  ) {
    return
  }

  const resolvedUrl = new URL(reference, pathToFileURL(page))
  const target = path.resolve(decodeURIComponent(resolvedUrl.pathname))
  const targetFile = statSync(target).isDirectory()
    ? path.join(target, 'index.html')
    : target

  assert.ok(
    targetFile.startsWith(root),
    `Reference escapes frontend root: ${reference} in ${page}`,
  )
  assert.ok(
    statSync(targetFile).isFile(),
    `Missing reference ${reference} in ${page}`,
  )

  if (resolvedUrl.hash) {
    const targetHtml = readFileSync(targetFile, 'utf8')
    const fragment = decodeURIComponent(resolvedUrl.hash.slice(1))
    assert.match(
      targetHtml,
      new RegExp(`\\bid=["']${fragment.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']`),
      `Missing #${fragment} target for ${reference}`,
    )
  }
}

test('all public routes exist and every internal link and asset resolves', () => {
  for (const relativePage of pages) {
    assert.ok(statSync(path.join(root, relativePage)).isFile())
  }

  for (const relativePage of pages) {
    const page = path.join(root, relativePage)
    const html = readFileSync(page, 'utf8')
    const references = [...html.matchAll(/\b(?:href|src)="([^"]+)"/g)]
    assert.ok(references.length > 0, `${page} has no navigation or assets`)

    for (const [, reference] of references) {
      resolveLocalReference(page, reference)
    }
  }
})

test('pages reference only static assets and include the shared responsive navigation', () => {
  for (const relativePage of pages) {
    const html = readFileSync(path.join(root, relativePage), 'utf8')
    assert.match(html, /<html lang="en">/)
    assert.match(html, /name="viewport"/)
    assert.match(html, /name="description"/)
    assert.match(html, /class="mobile-menu-toggle"[^>]+aria-expanded="false"/)
    assert.match(html, /id="mobile-navigation"[^>]+hidden/)
    const themeScript = relativePage === 'index.html' ? 'js/theme.js' : '../js/theme.js'
    assert.match(html, new RegExp(`<script defer src="${themeScript}"><\\/script>`))
    assert.equal([...html.matchAll(/\bid="theme-toggle"/g)].length, 1)
    assert.doesNotMatch(html, /react-dom|react-router|\/src\/main\.tsx|type="module"/i)
  }
})

test('homepage approach cards and featured 2 BHK CTA include the requested content', () => {
  const homepage = readFileSync(path.join(root, 'index.html'), 'utf8')
  const twoBhk = readFileSync(path.join(root, 'accommodation/2-bhk.html'), 'utf8')

  assert.match(homepage, /🎯<\/span><h3>Clear choices<\/h3>/)
  assert.match(homepage, /1 BHK, 2 BHK, and boating options with transparent details and no hidden fees/)
  assert.match(homepage, /WhatsApp at \+91 9448327432/)
  assert.match(homepage, /💬<\/span><h3>A conversation with the owner<\/h3>/)
  assert.match(homepage, /🌴<\/span><h3>Authentic Local Experience<\/h3>/)
  assert.match(homepage, /Honnavar river boating and regional guidance/)
  assert.match(twoBhk, /class="site-shell service-hero__grid glass-card featured-accommodation"/)
  assert.match(twoBhk, /class="btn-view-details-large" href="#enquiry-form"/)
  assert.match(twoBhk, /Owner-approved photographs pending/)
})

test('supplied photos appear only in their approved sections and 2 BHK stays empty', () => {
  const stylesheet = readFileSync(path.join(root, 'css/style.css'), 'utf8')
  assert.match(stylesheet, /\.stay-photo-gallery__item img\s*\{[\s\S]*?height:\s*auto;/)
  assert.match(stylesheet, /\.boating-section__image\s*\{[\s\S]*?aspect-ratio:\s*16\s*\/\s*9;/)

  const homepage = readFileSync(path.join(root, 'index.html'), 'utf8')
  const oneBhk = readFileSync(path.join(root, 'accommodation/1-bhk.html'), 'utf8')
  const twoBhk = readFileSync(path.join(root, 'accommodation/2-bhk.html'), 'utf8')
  const boating = readFileSync(path.join(root, 'boating/index.html'), 'utf8')
  const oneBhkImages = [...oneBhk.matchAll(/<img\b[^>]*src="([^"]+)"[^>]*alt="([^"]+)"/g)]
  assert.equal(oneBhkImages.length, 6)
  assert.ok(oneBhkImages.every(([, src, alt]) => src.includes('/one-bhk/') && alt.length > 0))
  assert.doesNotMatch(twoBhk, /<img\b|assets\/images\/(?:one-bhk|honnavar|boating)\//i)
  assert.match(twoBhk, /2 BHK imagery is intentionally empty/i)
  assert.match(homepage, /assets\/images\/one-bhk\/bedroom-bed-angle\.jpg/)
  assert.match(homepage, /assets\/images\/honnavar\/eco-beach-sign\.webp/)
  assert.match(homepage, /assets\/images\/honnavar\/woodland-boardwalk\.webp/)
  assert.match(homepage, /assets\/images\/honnavar\/beach-promenade\.webp/)
  assert.match(homepage, /assets\/images\/boating\/badagani-backwaters-boat\.jpg/)
  assert.match(boating, /assets\/images\/boating\/badagani-backwaters-boat\.jpg/)

  const attribution = readFileSync(path.join(root, 'assets/images/ATTRIBUTION.md'), 'utf8')
  assert.match(attribution, /CC BY-SA 4\.0/)
  assert.match(attribution, /Sourabh\.biswas003/)
  assert.match(attribution, /Wikimedia Commons/)

  for (const html of [homepage, oneBhk, boating]) {
    for (const [, alt] of html.matchAll(/<img\b[^>]*alt="([^"]*)"/g)) {
      assert.ok(alt.trim(), 'Every informative image requires alt text')
    }
  }
})

test('contact numbers remain clickable and unchanged', () => {
  for (const relativePage of pages) {
    const html = readFileSync(path.join(root, relativePage), 'utf8')
    assert.match(html, /href="tel:9448327432"[^>]*>[\s\S]*?9448327432/)
    assert.match(html, /href="tel:8660345883"[^>]*>[\s\S]*?8660345883/)
  }
})

test('enquiry forms expose the documented fields and explicit configuration feedback', () => {
  for (const relativePage of pages.slice(1)) {
    const html = readFileSync(path.join(root, relativePage), 'utf8')
    assert.match(html, /data-configuration-error role="alert" hidden/)
    assert.match(html, /name="name"[^>]+required/)
    assert.match(html, /name="phone"[^>]+required/)
    assert.match(html, /press Send in WhatsApp/)
    assert.match(html, /No enquiry details are stored/)
  }

  const accommodation = readFileSync(
    path.join(root, 'accommodation/1-bhk.html'),
    'utf8',
  )
  assert.match(accommodation, /name="property"[\s\S]*?1 BHK[\s\S]*?2 BHK/)
  assert.match(accommodation, /name="checkIn"/)
  assert.match(accommodation, /name="checkOut"/)
  assert.match(accommodation, /name="guests"/)

  const boating = readFileSync(path.join(root, 'boating/index.html'), 'utf8')
  assert.match(boating, /name="date"/)
  assert.match(boating, /name="participants"/)
  assert.match(boating, /name="duration"/)
})

test('WhatsApp URLs require a configured destination and encode enquiry details', () => {
  function loadWhatsapp(window, loadConfig) {
    const context = vm.createContext({ window })
    if (loadConfig) {
      vm.runInContext(
        readFileSync(path.join(root, 'js/config.js'), 'utf8'),
        context,
        { filename: 'config.js' },
      )
    }

    vm.runInContext(
      readFileSync(path.join(root, 'js/whatsapp.js'), 'utf8'),
      context,
      { filename: 'whatsapp.js' },
    )
    return window.EdenHomes.whatsapp
  }

  const details = {
    name: 'Asha & Dev',
    phone: '+91 94483 27432',
    property: '1 BHK',
    checkIn: '2026-12-01',
    checkOut: '2026-12-03',
    guests: '2',
  }

  const missingConfig = { EDEN_HOMES_CONFIG: {}, open() {} }
  const unavailableWhatsapp = loadWhatsapp(missingConfig, true)
  assert.match(unavailableWhatsapp.getConfigurationError(), /not configured/)
  assert.throws(
    () => unavailableWhatsapp.buildWhatsAppUrl('accommodation', details),
    /not configured/,
  )

  const opened = []
  const configuredWindow = {
    EDEN_HOMES_CONFIG: { whatsappDestinationNumber: '919876543210' },
    open(url, target) {
      opened.push({ url, target })
      return { opener: configuredWindow }
    },
  }
  const whatsapp = loadWhatsapp(configuredWindow, false)

  const url = whatsapp.buildWhatsAppUrl('accommodation', details)
  const parsedUrl = new URL(url)
  assert.equal(parsedUrl.hostname, 'wa.me')
  assert.equal(parsedUrl.pathname, '/919876543210')
  assert.match(parsedUrl.searchParams.get('text'), /Asha & Dev/)
  assert.match(parsedUrl.searchParams.get('text'), /Property: 1 BHK/)
  assert.match(parsedUrl.searchParams.get('text'), /Check-out: 2026-12-03/)
  assert.equal(opened.length, 0)

  whatsapp.openWhatsApp(url)
  assert.equal(opened[0].target, '_blank')
  assert.equal(opened[0].url, url)

  const boatingUrl = new URL(
    whatsapp.buildWhatsAppUrl('boating', {
      name: 'Asha',
      phone: '+91 94483 27432',
      date: '2026-12-04',
      participants: '3',
      duration: 'A requested duration',
    }),
  )
  assert.match(boatingUrl.searchParams.get('text'), /Preferred duration/)
  assert.match(boatingUrl.searchParams.get('text'), /Participants: 3/)
})

test('accommodation checkout must follow check-in before WhatsApp opens', () => {
  const opened = []
  const checkIn = { value: '2026-12-10', addEventListener(type, callback) { this[type] = callback } }
  const checkOut = {
    value: '2026-12-10',
    customError: '',
    addEventListener(type, callback) { this[type] = callback },
    setCustomValidity(message) { this.customError = message },
  }
  const values = {
    name: 'Asha',
    phone: '+91 94483 27432',
    property: '1 BHK',
    checkIn: checkIn.value,
    checkOut: checkOut.value,
    guests: '2',
  }
  const configurationError = { hidden: true, textContent: '' }
  const status = { textContent: '' }
  const submitButton = { disabled: true }
  const form = {
    elements: { checkIn, checkOut },
    handlers: {},
    querySelector(selector) {
      return selector === '[data-configuration-error]'
        ? configurationError
        : selector === '[data-form-status]'
          ? status
          : submitButton
    },
    addEventListener(type, callback) { this.handlers[type] = callback },
    reportValidity() { return !checkOut.customError },
  }
  const window = {
    EDEN_HOMES_CONFIG: { whatsappDestinationNumber: '919876543210' },
    open(url) {
      opened.push(url)
      return { opener: null }
    },
  }
  class FormDataStub {
    get(name) { return values[name] }
  }
  const context = vm.createContext({
    window,
    document: { querySelectorAll: () => [form] },
    FormData: FormDataStub,
  })

  for (const file of ['whatsapp.js', 'accommodation.js']) {
    vm.runInContext(readFileSync(path.join(root, 'js', file), 'utf8'), context)
  }
  window.EdenHomes.initializeAccommodationForms()

  function submit() {
    form.handlers.submit({ preventDefault() {} })
  }

  submit()
  assert.equal(opened.length, 0)
  assert.match(checkOut.customError, /later than check-in/)

  checkOut.value = '2026-12-11'
  values.checkOut = checkOut.value
  checkOut.change()
  assert.equal(checkOut.customError, '')
  submit()
  assert.equal(opened.length, 1)
  assert.match(new URL(opened[0]).searchParams.get('text'), /Check-out: 2026-12-11/)
  assert.match(status.textContent, /manually.*Send|press Send there/)
})

test('mobile navigation toggles accessibly and closes on Escape or page resize', () => {
  const documentHandlers = {}
  const windowHandlers = {}
  const classes = new Set()
  let focused = false
  const attributes = {
    'aria-expanded': 'false',
    'aria-label': 'Open navigation menu',
  }
  const button = {
    handlers: {},
    addEventListener(type, callback) { this.handlers[type] = callback },
    getAttribute(name) { return attributes[name] },
    setAttribute(name, value) { attributes[name] = value },
    focus() { focused = true },
  }
  const menu = {
    hidden: true,
    handlers: {},
    classList: {
      add(name) { classes.add(name) },
      remove(name) { classes.delete(name) },
    },
    addEventListener(type, callback) { this.handlers[type] = callback },
  }
  const document = {
    querySelector: () => button,
    getElementById: () => menu,
    addEventListener(type, callback) { documentHandlers[type] = callback },
  }
  const window = {
    addEventListener(type, callback) { windowHandlers[type] = callback },
    matchMedia: () => ({ matches: true }),
  }
  const context = vm.createContext({ window, document })
  vm.runInContext(
    readFileSync(path.join(root, 'js/navigation.js'), 'utf8'),
    context,
  )
  window.EdenHomes.initializeNavigation()

  button.handlers.click()
  assert.equal(attributes['aria-expanded'], 'true')
  assert.equal(menu.hidden, false)
  assert.equal(classes.has('mobile-nav--open'), true)

  documentHandlers.keydown({ key: 'Escape' })
  assert.equal(attributes['aria-expanded'], 'false')
  assert.equal(menu.hidden, true)
  assert.equal(focused, true)

  button.handlers.click()
  menu.handlers.click({ target: { closest: () => ({}) } })
  assert.equal(menu.hidden, true)

  button.handlers.click()
  windowHandlers.resize()
  assert.equal(menu.hidden, true)
})

test('frontend contains no stored enquiry handling or external image/font dependencies', () => {
  const files = [...pages.map((page) => path.join(root, page))]
  const jsDirectory = path.join(root, 'js')
  for (const file of readdirSync(jsDirectory)) {
    if (file.endsWith('.js')) {
      files.push(path.join(jsDirectory, file))
    }
  }

  const source = files.map((file) => readFileSync(file, 'utf8')).join('\n')
  const enquirySource = files
    .filter((file) => path.basename(file) !== 'theme.js')
    .map((file) => readFileSync(file, 'utf8'))
    .join('\n')
  assert.doesNotMatch(enquirySource, /\b(localStorage|sessionStorage|document\.cookie)\b/)
  assert.doesNotMatch(source, /fetch\s*\(|XMLHttpRequest|\/api\//)
  assert.doesNotMatch(source, /fonts\.googleapis\.com|images\.unsplash\.com/)
})
