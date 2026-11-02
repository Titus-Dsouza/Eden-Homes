import { ArrowUpRight, Waves } from 'lucide-react'
import { ImagePlaceholder } from './ImagePlaceholder'
import { SectionHeading } from './SectionHeading'

export function BoatingSection() {
  return (
    <section className="boating-section" id="boating" aria-labelledby="boating-title">
      <div className="site-shell boating-section__grid">
        <div className="boating-section__copy">
          <p className="eyebrow eyebrow--light">
            <Waves size={15} aria-hidden="true" /> A different way to explore
          </p>
          <SectionHeading
            eyebrow="Boating enquiries"
            title="Make room for a day on the water."
            description="Interested in boating during your visit? Get in touch to ask about current arrangements. Details are confirmed directly by the owner."
            titleId="boating-title"
          />
          <a className="button button--light" href="/boating">
            Explore boating
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <p className="boating-section__note">
            Enquiries are subject to owner confirmation. No timings, packages,
            routes, or availability are listed here.
          </p>
        </div>
        <ImagePlaceholder
          className="boating-section__image"
          label="Boating"
          variant="boating"
        />
      </div>
      <span className="boating-section__decoration" aria-hidden="true" />
    </section>
  )
}
