import { ArrowUpRight } from 'lucide-react'

const footerLinks = [
  { href: '/#home', label: 'Home' },
  { href: '/#accommodation', label: 'Accommodation' },
  { href: '/#boating', label: 'Boating' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
]

const currentYear = new Date().getFullYear()

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="site-footer__main">
          <a className="brand brand--footer" href="/#home" aria-label="Eden Homes, back to home">
            <span className="brand__name">eden</span>
            <span className="brand__descriptor">HOMES · HONNAVAR</span>
          </a>
          <p className="site-footer__tagline">
            A homestay and boating enquiry destination in Honnavar, Karnataka.
          </p>
          <div className="site-footer__links" aria-label="Footer navigation">
            {footerLinks.map((item) => (
              <a href={item.href} key={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <div className="site-footer__phones">
            <a href="tel:9448327432">9448327432</a>
            <a href="tel:8660345883">8660345883</a>
          </div>
          <a className="site-footer__top" href="/#home" aria-label="Back to top">
            Back to top <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
        <div className="site-footer__bottom">
          <span>© {currentYear} Eden Homes</span>
          <span>Enquiries only · Owner confirmation required</span>
          <span>Honnavar, Karnataka, India</span>
        </div>
      </div>
    </footer>
  )
}
