import type { CSSProperties } from 'react'
import { processCapabilities, processStatement } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

export function ProcessImprovement() {
  return (
    <section className="section section--white" id="process">
      <div className="wrap">
        <SectionHead
          eyebrow="04 — Process Improvement"
          title="Improving Processes Through Better Workflow Design"
          lead="Not change for its own sake — a structured look at how work is actually done, where it breaks, and which control point prevents the most rework."
        />

        <div className="process-layout">
          <div className="process-statement" data-reveal>
            <span className="ps-label">
              <Icon name="target" size={14} />
              How I approach it
            </span>
            <p>{processStatement}</p>
            <div className="ps-foot">
              The goal is a workflow that operators can follow consistently, and that a digital tool can later
              support without redesigning the process around the tool.
            </div>
          </div>

          <div className="process-grid">
            {processCapabilities.map((capability, index) => (
              <article
                className="process-item"
                key={capability.title}
                data-reveal
                style={{ '--d': `${index * 35}ms` } as CSSProperties}
              >
                <span className="pi-check" aria-hidden="true">
                  <Icon name="check" size={13} strokeWidth={2} />
                </span>
                <div>
                  <h3>{capability.title}</h3>
                  <p>{capability.blurb}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
