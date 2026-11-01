import { buildSteps } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

export function BuildSteps() {
  return (
    <section className="section section--white build" id="how-i-build">
      <div className="wrap">
        <SectionHead
          eyebrow="07 — Method"
          title="How I Build Solutions"
          lead="A repeatable path from an operational problem to a tested prototype — with the rules defined before anything is built."
        />

        <div className="build-timeline">
          {buildSteps.map((step, index) => (
            <div className="build-step" key={step.title} data-reveal>
              <div className="bs-node" aria-hidden="true">
                <Icon name={step.icon} size={19} />
              </div>
              <div className="bs-card">
                <div className="bs-topline">
                  <span className="bs-num">STEP {String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="build-closing" data-reveal>
          <p>&ldquo;I don&rsquo;t start with the technology. I start with the operational problem.&rdquo;</p>
          <a className="btn btn-ghost btn-sm" href="#solutions">
            See how it applies
            <Icon name="arrow" size={15} />
          </a>
        </div>
      </div>
    </section>
  )
}
