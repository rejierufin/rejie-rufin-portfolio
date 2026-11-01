import { projects } from '../data/portfolio'
import { Icon } from './Icon'
import { Mockup, mockSpecs } from './Mockups'
import { SectionHead } from './SectionHead'

interface SolutionsProps {
  onOpen: (id: string, anchor?: string) => void
}

export function Solutions({ onOpen }: SolutionsProps) {
  return (
    <section className="section section--dark solutions" id="solutions">
      <div className="wrap">
        <SectionHead
          eyebrow="06 — Featured Solutions"
          title="Featured Solutions"
          lead="Operational problems first, then the solution concept. Each project shows the challenge, the rules that shape it, and the interface that supports the workflow."
        />

        <div className="solution-list">
          {projects.map((project) => (
            <article className="solution-card" key={project.id} data-reveal>
              <div className="solution-media">
                <Mockup spec={mockSpecs[project.id][project.mockups[0].variant]} />
              </div>

              <div className="solution-body">
                <div className="solution-topline">
                  <span className="solution-num">{project.number}</span>
                  <span className="solution-cat">{project.shortCategory}</span>
                </div>

                <h3 className="solution-title">{project.name}</h3>
                <p className="solution-desc">{project.description}</p>

                <ul className="solution-areas">
                  {project.keyAreas.slice(0, 4).map((area) => (
                    <li key={area}>{area}</li>
                  ))}
                  {project.keyAreas.length > 4 ? (
                    <li className="is-more">+{project.keyAreas.length - 4} more</li>
                  ) : null}
                </ul>

                <div className="solution-role">
                  <span>My role</span>
                  <p>{project.role}</p>
                </div>

                <div className="solution-actions">
                  <button type="button" className="btn btn-primary" onClick={() => onOpen(project.id, 'overview')}>
                    View Project
                    <Icon name="arrow" size={15} />
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark-outline"
                    onClick={() => onOpen(project.id, 'screenshots')}
                  >
                    View Screenshots
                  </button>
                  <button type="button" className="btn btn-text" onClick={() => onOpen(project.id, 'design')}>
                    View Solution Details
                    <Icon name="arrow" size={14} />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="solutions-foot" data-reveal>
          <Icon name="info" size={14} />
          These projects are solution concepts and application prototypes. They demonstrate operational requirements,
          business-rule design, and interface thinking — not deployed enterprise systems, and no measured business
          results are claimed.
        </p>
      </div>
    </section>
  )
}
