import type { CSSProperties } from 'react'
import { experience } from '../data/portfolio'
import { Icon } from './Icon'
import { SectionHead } from './SectionHead'

function Editable({ value }: { value: string }) {
  const isPlaceholder = value.trim().startsWith('[')
  return <span className={isPlaceholder ? 'placeholder-chip' : undefined}>{value}</span>
}

export function Experience() {
  return (
    <section className="section section--soft" id="experience">
      <div className="wrap">
        <SectionHead
          eyebrow="08 — Experience"
          title="Professional Experience"
          lead="Operations experience described by the work performed — with employer, dates, and location deliberately left as editable placeholders."
        />

        <div className="exp-grid">
          <aside className="exp-card" data-reveal>
            <span className="exp-status">Current role</span>
            <h3 className="exp-role">{experience.role}</h3>
            <p className="exp-company">
              <Editable value={experience.company} />
            </p>
            <p className="exp-meta">
              <Editable value={experience.period} />
              <span className="sep">·</span>
              <Editable value={experience.location} />
            </p>

            <ul className="exp-themes" aria-label="Experience themes">
              {experience.themes.map((theme) => (
                <li key={theme}>{theme}</li>
              ))}
            </ul>
          </aside>

          <div className="exp-body" data-reveal style={{'--d': '100ms'} as CSSProperties}>
            <h3>Scope &amp; responsibilities</h3>
            <p className="exp-summary">{experience.summary}</p>

            <ul className="exp-list">
              {experience.responsibilities.map((item) => (
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
              Employer name, employment dates, and location are intentionally shown as placeholders. No company,
              certification, promotion, award, or years-of-experience claim has been added.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
