import type { CSSProperties } from 'react'
import { labProjects } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

export function InnovationLab() {
  return (
    <section className="section lab" id="lab">
      <div className="wrap">
        <SectionHead
          eyebrow="10 — Innovation Lab"
          title="Innovation Lab"
          lead="Exploring how AI-assisted and no-code development can turn ideas into interactive digital experiences — separate from professional freight forwarding solutions."
        />

        <div className="lab-grid">
          {labProjects.map((project, index) => (
            <article
              className="lab-card"
              key={project.name}
              data-reveal
              style={{ '--d': `${index * 70}ms` } as CSSProperties}
            >
              <div className="lab-top">
                <span className="lab-icon" aria-hidden="true">
                  <Icon name={project.icon} size={18} />
                </span>
                <span className="lab-type">{project.type}</span>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <ul className="lab-tags">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="lab-separation" data-reveal>
          <Icon name="info" size={15} />
          Innovation Lab projects are personal and experimental concepts. They are intentionally kept separate from the
          professional freight forwarding solutions above, and they are not presented as commercial or deployed
          products.
        </p>
      </div>
    </section>
  )
}
