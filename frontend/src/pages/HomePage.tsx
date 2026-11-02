import { ArrowDownRight, ArrowUpRight, Compass, Home, Waves } from 'lucide-react'
import { AccommodationCard } from '../components/AccommodationCard'
import { BoatingSection } from '../components/BoatingSection'
import { ContactSection } from '../components/ContactSection'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { PageContainer } from '../components/PageContainer'
import { SectionHeading } from '../components/SectionHeading'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <PageContainer
        className="home-page"
        id="main-content"
        size="full"
      >
        <section className="hero-section" id="home" aria-labelledby="hero-title">
          <div className="site-shell hero-section__grid">
            <div className="hero-section__copy">
              <p className="eyebrow">
                <span className="eyebrow__dot" aria-hidden="true" />
                Homestay & boating enquiries · Honnavar
              </p>
              <h1 id="hero-title">
                Find your own
                <br />
                <em>pace</em> in Honnavar.
              </h1>
              <p className="hero-section__description">
                A welcoming starting point for your stay by the coast. Explore
                accommodation options or get in touch about boating.
              </p>
              <div className="hero-section__actions">
                <a className="button button--primary" href="#accommodation">
                  Explore accommodation
                  <ArrowUpRight size={17} aria-hidden="true" />
                </a>
                <a className="button button--text" href="#boating">
                  Explore boating
                  <ArrowDownRight size={17} aria-hidden="true" />
                </a>
              </div>
              <div className="hero-section__location">
                <Compass size={16} aria-hidden="true" />
                <span>Honnavar, Karnataka, India</span>
              </div>
            </div>
            <div className="hero-section__visual">
              <ImagePlaceholder
                className="hero-section__image"
                label="Eden Homes"
                variant="hero"
              />
              <div className="hero-note">
                <span className="hero-note__icon">
                  <Home size={18} aria-hidden="true" />
                </span>
                <span>
                  <strong>A place to begin</strong>
                  <span>Stays and boating enquiries</span>
                </span>
                <ArrowUpRight size={16} aria-hidden="true" />
              </div>
              <span className="hero-section__index" aria-hidden="true">
                EH · 01
              </span>
            </div>
          </div>
          <a className="scroll-cue" href="#about">
            <span>Scroll to discover</span>
            <ArrowDownRight size={16} aria-hidden="true" />
          </a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="site-shell intro-section__grid">
            <div className="intro-section__visual">
              <ImagePlaceholder
                className="intro-section__image"
                label="Honnavar"
                variant="location"
              />
              <span className="intro-section__caption">
                A place in Honnavar, Karnataka
              </span>
            </div>
            <div className="intro-section__copy">
              <SectionHeading
                eyebrow="Welcome to Eden Homes"
                title="A thoughtful place to plan your time here."
                description="Eden Homes offers 1 BHK and 2 BHK accommodation enquiries, along with boating enquiries in Honnavar. Explore the options and speak with the owner about the details."
              />
              <a className="text-link" href="#accommodation">
                Discover your options
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
              <div className="intro-section__aside">
                <span className="intro-section__aside-line" />
                <p>
                  Availability, pricing, and arrangements are confirmed
                  directly by the owner.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className="accommodation-section section-pad"
          id="accommodation"
          aria-labelledby="accommodation-title"
        >
          <div className="site-shell">
            <div className="accommodation-section__heading">
              <SectionHeading
                eyebrow="Stay at Eden Homes"
                title="A place that fits your plans."
                description="Explore the accommodation options. Get in touch to confirm current details, availability, and pricing."
                titleId="accommodation-title"
              />
              <span className="section-index" aria-hidden="true">
                01 — 02
              </span>
            </div>
            <div className="accommodation-grid">
              <AccommodationCard
                name="1 BHK accommodation"
                description="Looking for a 1 BHK stay? Contact the owner to discuss details and availability."
                href="/accommodation/1-bhk"
                imageLabel="1 BHK accommodation"
                variant="stay"
              />
              <AccommodationCard
                name="2 BHK accommodation"
                description="Considering a 2 BHK stay? Contact the owner to discuss details and availability."
                href="/accommodation/2-bhk"
                imageLabel="2 BHK accommodation"
                variant="stay"
              />
            </div>
            <p className="accommodation-section__note">
              Enquiries are not confirmed bookings. Property details and
              arrangements require owner confirmation.
            </p>
          </div>
        </section>

        <section className="approach-section section-pad">
          <div className="site-shell">
            <SectionHeading
              eyebrow="The Eden Homes approach"
              title="Clear choices. A conversation with the owner."
              description="Start with the experience you have in mind. The details are worked out directly with Eden Homes."
              centered
            />
            <div className="approach-grid">
              <article className="approach-card">
                <span className="approach-card__number">01</span>
                <span className="approach-card__icon">
                  <Home size={20} aria-hidden="true" />
                </span>
                <h3>Choose a stay</h3>
                <p>Explore the 1 BHK and 2 BHK accommodation options.</p>
              </article>
              <article className="approach-card">
                <span className="approach-card__number">02</span>
                <span className="approach-card__icon">
                  <Waves size={20} aria-hidden="true" />
                </span>
                <h3>Ask about boating</h3>
                <p>Get in touch to ask about boating arrangements in Honnavar.</p>
              </article>
              <article className="approach-card">
                <span className="approach-card__number">03</span>
                <span className="approach-card__icon">
                  <Compass size={20} aria-hidden="true" />
                </span>
                <h3>Confirm directly</h3>
                <p>The owner confirms availability, pricing, and arrangements.</p>
              </article>
            </div>
          </div>
        </section>

        <BoatingSection />
        <ContactSection />
      </PageContainer>
      <SiteFooter />
    </>
  )
}
