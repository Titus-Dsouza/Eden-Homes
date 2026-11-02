type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  centered?: boolean
  titleId?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
  titleId,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${centered ? ' section-heading--centered' : ''}`}
    >
      <p className="eyebrow">{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </div>
  )
}
