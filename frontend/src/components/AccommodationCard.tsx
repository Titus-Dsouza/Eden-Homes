import { ArrowUpRight } from 'lucide-react'
import { ImagePlaceholder } from './ImagePlaceholder'

type AccommodationCardProps = {
  name: string
  description: string
  href: string
  imageLabel: string
  variant: 'stay' | 'location'
}

export function AccommodationCard({
  name,
  description,
  href,
  imageLabel,
  variant,
}: AccommodationCardProps) {
  return (
    <article className="accommodation-card">
      <ImagePlaceholder
        className="accommodation-card__image"
        label={imageLabel}
        variant={variant}
      />
      <div className="accommodation-card__content">
        <p className="eyebrow">Accommodation</p>
        <h3>{name}</h3>
        <p className="accommodation-card__description">{description}</p>
        <a className="text-link" href={href}>
          View details <ArrowUpRight size={17} aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
