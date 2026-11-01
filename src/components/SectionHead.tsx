interface SectionHeadProps {
  eyebrow: string
  title: string
  lead?: string
  leadWide?: boolean
}

export function SectionHead({ eyebrow, title, lead, leadWide }: SectionHeadProps) {
  return (
    <div className="section-head" data-reveal>
      <p className="eyebrow">
        <span className="eyebrow-line" aria-hidden="true" />
        {eyebrow}
      </p>
      <div className="section-head-row">
        <h2 className="section-title">{title}</h2>
        {lead ? <p className={`lead${leadWide ? ' lead--wide' : ''}`}>{lead}</p> : null}
      </div>
    </div>
  )
}
