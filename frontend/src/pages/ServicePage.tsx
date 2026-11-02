import { ArrowUpRight } from 'lucide-react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ImagePlaceholder } from '../components/ImagePlaceholder'
import { PageContainer } from '../components/PageContainer'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'

export type ServicePageConfig = {
  title: string
  description: string
  pageTitle: string
  metaDescription: string
  variant: 'stay' | 'boating'
  imageLabel: string
  enquiryLabel: string
}

const services = [
  { href: '/accommodation/1-bhk', label: '1 BHK accommodation' },
  { href: '/accommodation/2-bhk', label: '2 BHK accommodation' },
  { href: '/boating', label: 'Boating' },
]

export function ServicePage({ config }: { config: ServicePageConfig }) {
  useEffect(() => {
    const previousTitle = document.title
    const description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    )
    const previousDescription = description?.content

    document.title = config.pageTitle
    if (description) description.content = config.metaDescription

    return () => {
      document.title = previousTitle
      if (description && previousDescription !== undefined) {
        description.content = previousDescription
      }
    }
  }, [config])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />
      <PageContainer className="service-page" id="main-content" size="full">
        <section className="service-hero" aria-labelledby="service-title">
          <div className="site-shell service-hero__grid">
            <div className="service-hero__copy">
              <p className="eyebrow">Eden Homes · Honnavar</p>
              <h1 id="service-title">{config.title}</h1>
              <p className="service-hero__description">{config.description}</p>
              <p className="service-hero__note">
                Contact the owner to confirm details and availability. An
                enquiry is not a confirmed booking.
              </p>
              <a className="button button--primary" href="/#contact">
                {config.enquiryLabel}
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div
              className="service-hero__gallery"
              role="group"
              aria-label="Service photo placeholders"
            >
              <ImagePlaceholder
                className="service-hero__image service-hero__image--main"
                label={config.imageLabel}
                variant={config.variant}
              />
              <ImagePlaceholder
                className="service-hero__image service-hero__image--secondary"
                label={`${config.imageLabel} additional photo`}
                variant={config.variant}
              />
              <p className="service-hero__gallery-note">
                Owner-approved photographs pending
              </p>
            </div>
          </div>
        </section>

        <section className="service-information section-pad">
          <div className="site-shell service-information__inner">
            <div>
              <p className="eyebrow">Plan your visit</p>
              <h2>Details confirmed directly with Eden Homes.</h2>
            </div>
            <p>
              Please contact the owner for verified information about this
              service, arrangements, and current availability. No prices,
              facilities, capacities, or availability are published here.
            </p>
          </div>
        </section>

        <section className="service-directory section-pad" aria-labelledby="services-title">
          <div className="site-shell">
            <div className="service-directory__heading">
              <div>
                <p className="eyebrow">Explore Eden Homes</p>
                <h2 id="services-title">More ways to plan your visit.</h2>
              </div>
              <a className="text-link" href="/#home">
                Back to homepage <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            </div>
            <div className="service-directory__links">
              {services.map((service) => (
                <Link
                  className="service-directory__link"
                  key={service.href}
                  to={service.href}
                >
                  {service.label}
                  <ArrowUpRight size={17} aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      </PageContainer>
      <SiteFooter />
    </>
  )
}
