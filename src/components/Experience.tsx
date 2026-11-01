import type { CSSProperties } from 'react'
import { experience } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

const current = experience.roles.find((item) => item.current) ?? experience.roles[0]
const earlier = experience.roles.filter((item) => item !== current)

export function Experience() {
  return (
    <section className="section section--soft" id="experience">
      <div className="wrap">
        <SectionHead
          eyebrow="08 — Experience"
          title="Professional Experience"
          lead="Import and export logistics experience across customs manifest processing, freight documentation, regulatory liaison, and administrative operations."
        />

        <div className="exp-grid">
          <aside className="exp-card" data-reveal>
            <span className="exp-status">Current role</span>
            <h3 className="exp-role">{current.role}</h3>
            <p className="exp-company">{current.company}</p>
            <p className="exp-meta">
              <span>{current.period}</span>
              <span className="sep">·</span>
              <span>{current.location}</span>
            </p>

            <ul className="exp-themes" aria-label="Experience themes">
              {experience.themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </aside>

          <div className="exp-body" data-reveal style={{ '--d': '100ms' } as CSSProperties}>
            <h3>Scope &amp; responsibilities</h3>
            {current.summary ? <p className="exp-summary">{current.summary}</p> : null}

            <ul className="exp-list">
              {current.responsibilities.map((item) => (
                <li key={item}>
                  <span className="el-mark" aria-hidden="true">
                    <Icon name="check" size={11} strokeWidth={2.4} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="exp-note">
              <Icon name="info" size={14} />
              Employers, titles, dates, and locations are taken directly from my resume. No certification,
              promotion, award, or client result has been added.
            </p>
          </div>
        </div>

        <ol className="exp-history" aria-label="Earlier roles">
          {earlier.map((item, index) => (
            <li
              key={`${item.company}-${item.period}`}
              className="exp-history-item"
              data-reveal
              style={{ '--d': `${index * 60}ms` } as CSSProperties}
            >
              <div className="eh-head">
                <span className="eh-period">{item.period}</span>
                <h4 className="eh-role">{item.role}</h4>
                <p className="eh-company">
                  {item.company} <span className="sep">·</span> {item.location}
                </p>
              </div>
              <div>
                {item.summary ? <p className="eh-summary">{item.summary}</p> : null}
                <ul className="eh-list">
                  {item.responsibilities.map((duty) => (
                    <li key={duty}>{duty}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
