import { Fragment } from 'react'
import { valueEquation } from '../data/portfolio'
import { SectionHead } from './SectionHead'

export function ValueEquation() {
  return (
    <section className="section section--dark value" id="value">
      <div className="wrap">
        <SectionHead
          eyebrow="09 — Value Proposition"
          title="Where Operations Meets Technology"
          lead="The combination is the advantage: operational knowledge that can be translated into rules a system can actually follow."
        />

        <div className="equation" data-reveal>
          {valueEquation.inputs.map((input, index) => (
            <Fragment key={input}>
              <div className="eq-term">
                <span className="eq-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="eq-text">{input}</span>
              </div>
              <span className="eq-op" aria-hidden="true">
                +
              </span>
            </Fragment>
          ))}
          <div className="eq-result">
            <span className="eq-index">=</span>
            <span className="eq-text">{valueEquation.result}</span>
          </div>
        </div>

        <p className="value-support" data-reveal>
          {valueEquation.supporting}
        </p>
      </div>
    </section>
  )
}
