import { ArrowUpRight, MapPin, Phone } from 'lucide-react'
import { SectionHeading } from './SectionHeading'
import { ImagePlaceholder } from './ImagePlaceholder'

const phoneNumbers = ['9448327432', '8660345883']

export function ContactSection() {
  return (
    <section className="contact-section section-pad" id="contact">
      <div className="site-shell contact-section__grid">
        <div className="contact-section__content">
          <SectionHeading
            eyebrow="Get in touch"
            title="Let’s talk about your visit."
            description="For accommodation or boating enquiries, speak directly with Eden Homes. The owner will confirm availability, pricing, and arrangements."
          />
          <div className="contact-section__location">
            <MapPin size={19} aria-hidden="true" />
            <span>
              <strong>Honnavar</strong>
              <span>Karnataka, India</span>
            </span>
          </div>
          <div className="contact-section__phones" aria-label="Telephone contacts">
            {phoneNumbers.map((phone) => (
              <a className="phone-link" href={`tel:${phone}`} key={phone}>
                <span className="phone-link__icon">
                  <Phone size={17} aria-hidden="true" />
                </span>
                <span>
                  <span className="phone-link__label">Call Eden Homes</span>
                  <strong>{phone}</strong>
                </span>
                <ArrowUpRight size={17} aria-hidden="true" />
              </a>
            ))}
          </div>
          <p className="contact-section__disclaimer">
            Your enquiry is not a confirmed booking. All details are subject to
            direct owner confirmation.
          </p>
        </div>
        <div className="contact-section__visual" id="location">
          <ImagePlaceholder
            className="contact-section__map"
            label="Honnavar, Karnataka"
            variant="location"
          />
          <div className="location-note">
            <MapPin size={18} aria-hidden="true" />
            <span>
              <strong>Honnavar, Karnataka</strong>
              <span>Exact property location to be confirmed by the owner.</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
