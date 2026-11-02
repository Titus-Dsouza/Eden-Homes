import { ArrowUpRight, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const navigation = [
  { href: '/#home', label: 'Home' },
  { href: '/#accommodation', label: 'Accommodation' },
  { href: '/#boating', label: 'Boating' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a
          className="brand"
          href="/#home"
          aria-label="Eden Homes, back to home"
          onClick={closeMenu}
        >
          <span className="brand__name">eden</span>
          <span className="brand__descriptor">HOMES · HONNAVAR</span>
        </a>

        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="button button--small header-cta" href="/#contact">
          Enquire now <ArrowUpRight size={16} aria-hidden="true" />
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        className={`mobile-nav${menuOpen ? ' mobile-nav--open' : ''}`}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        aria-hidden={!menuOpen}
      >
        {navigation.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
            {item.label}
          </a>
        ))}
        <a
          className="mobile-nav__cta"
          href="/#contact"
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          Enquire now <ArrowUpRight size={16} aria-hidden="true" />
        </a>
      </nav>
    </header>
  )
}
