import type { CSSProperties } from 'react'
import { expertiseCapabilities } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

const groups = expertiseCapabilities.reduce<Record<string, typeof expertiseCapabilities>>((acc, item) => {
  const key = item.group || 'Capabilities'
  acc[key] = [...(acc[key] ?? []), item]
  return acc
}, {})

export function Expertise() {
  return (
    <section className="section section--white" id="expertise">
      <div className="wrap">
        <SectionHead
          eyebrow="02 — Expertise"
          title="Freight Forwarding & Shipping Operations"
          lead="Hands-on operational knowledge across ocean freight, import documentation, validation, and operational control — presented as capabilities, not percentages."
        />

        {Object.entries(groups).map(([group, capabilities]) => (
          <div className="group-block" key={group}>
            <div className="group-head" data-reveal>
              <h3>{group}</h3>
              <span className="group-rule" aria-hidden="true" />
              <span className="group-count">
                {String(capabilities.length).padStart(2, '0')} capabilities
              </span>
            </div>

            <div className="cap-grid">
              {capabilities.map((capability, index) => (
                <article
                  className="cap-card"
                  key={capability.title}
                  data-reveal
                  style={{ '--d': `${index * 45}ms` } as CSSProperties}
                >
                  <span className="cap-icon" aria-hidden="true">
                    <Icon name={capability.icon} size={19} />
                  </span>
                  <h4 className="cap-title">{capability.title}</h4>
                  <p className="cap-blurb">{capability.blurb}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
