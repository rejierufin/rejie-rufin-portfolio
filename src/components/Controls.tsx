import type { CSSProperties } from 'react'
import { controlCapabilities, dataFlow } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

export function Controls() {
  return (
    <section className="section section--dark controls" id="controls">
      <div className="wrap">
        <SectionHead
          eyebrow="03 — Operational Data & Controls"
          title="Operational Data & Controls"
          lead="Data only has value when it is checked, reconciled, and tied to an action. This is the layer where operational knowledge becomes structure."
        />

        <div className="controls-layout">
          <div className="control-list">
            {controlCapabilities.map((item, index) => (
              <article
                className="control-item"
                key={item.title}
                data-reveal
                style={{ '--d': `${index * 35}ms` } as CSSProperties}
              >
                <span className="ci-icon" aria-hidden="true">
                  <Icon name={item.icon} size={17} />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.blurb}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="flow-card" data-reveal style={{ '--d': '120ms' } as CSSProperties}>
            <div className="flow-card-head">
              <h3>Operational Data Flow</h3>
              <span className="fc-live">Structured</span>
            </div>
            <div className="flow-steps">
              {dataFlow.map((step, index) => (
                <div className="flow-step" key={step.label}>
                  <div className="fs-rail">
                    <span className="fs-dot">{String(index + 1).padStart(2, '0')}</span>
                  </div>
                  <div>
                    <h4>{step.label}</h4>
                    <p>{step.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
