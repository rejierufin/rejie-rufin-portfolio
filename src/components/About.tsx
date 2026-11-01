import type { CSSProperties } from 'react'
import { aboutParagraphs, aboutQuote, profile } from '../data/portfolio'
import { SectionHead } from './SectionHead'

const facts = [
  { label: 'Primary field', value: 'Freight forwarding operations' },
  { label: 'Approach', value: 'Rules before screens' },
  { label: 'Build style', value: 'Concepts & prototypes' },
]

export function About() {
  return (
    <section className="section about" id="about">
      <div className="wrap">
        <SectionHead
          eyebrow="01 — About"
          title="Operations Expertise Meets Digital Innovation."
          lead="A freight forwarding background, applied to the way operational work is structured, checked, and reported."
          leadWide
        />

        <div className="about-grid">
          <div className="about-body" data-reveal>
            {aboutParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="about-facts">
              {facts.map((fact) => (
                <div className="about-fact" key={fact.label}>
                  <span className="af-label">{fact.label}</span>
                  <span className="af-value">{fact.value}</span>
                </div>
              ))}
            </div>
          </div>

          <aside className="about-quote" data-reveal style={{ '--d': '120ms' } as CSSProperties}>
            <span className="quote-mark" aria-hidden="true">
              &ldquo;
            </span>
            <blockquote>{aboutQuote}</blockquote>
            <p className="quote-sub">
              Technology is not the starting point. The operational problem is — and everything else is designed
              around it.
            </p>
            <div className="quote-sign">
              <span className="qs-mark" aria-hidden="true">
                RR
              </span>
              {profile.name}
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
