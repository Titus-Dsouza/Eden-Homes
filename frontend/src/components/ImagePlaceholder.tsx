type ImagePlaceholderProps = {
  label: string
  variant: 'hero' | 'stay' | 'boating' | 'location'
  className?: string
}

export function ImagePlaceholder({
  label,
  variant,
  className = '',
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder image-placeholder--${variant} ${className}`}
      role="img"
      aria-label={`Illustrative image placeholder for ${label}. Replace with owner-approved photography.`}
    >
      <span className="image-placeholder__sun" aria-hidden="true" />
      <span className="image-placeholder__ridge" aria-hidden="true" />
      <span className="image-placeholder__water" aria-hidden="true" />
      <span className="image-placeholder__note">
        <span className="image-placeholder__note-mark" aria-hidden="true" />
        Owner-approved photography pending
      </span>
      <span className="image-placeholder__label">{label}</span>
    </div>
  )
}
