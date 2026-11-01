import type { CSSProperties } from 'react'
import { skillGroups } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

export function DigitalSkills() {
  return (
    <section className="section section--soft" id="skills">
      <div className="wrap">
        <SectionHead
          eyebrow="05 — Skills"
          title="Skills & Tools"
          lead="Freight forwarding capability, process and digital solution skills, the systems I work in daily, and the professional strengths that carry the work."
        />

        <div className="skills-grid">
          {skillGroups.map((group, groupIndex) => (
            <article
              className={`skill-panel${groupIndex === 1 ? ' skill-panel--accent' : ''}`}
              key={group.title}
              data-reveal
              style={{ '--d': `${groupIndex * 90}ms` } as CSSProperties}
            >
              <div className="sp-head">
                <span className="sp-icon" aria-hidden="true">
                  <Icon name={group.icon} size={18} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <p className="sp-caption">{group.caption}</p>

              <div className="skill-rows">
                {group.skills.map((skill) => (
                  <div className="skill-row" key={skill.name}>
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-note">{skill.note}</span>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <p className="skills-note" data-reveal>
          <Icon name="info" size={14} />
          Only the tools listed above are claimed. Application work referenced on this site is presented as solution
          concepts and prototypes built with Microsoft Power Apps and AI-assisted no-code development.
        </p>
      </div>
    </section>
  )
}
