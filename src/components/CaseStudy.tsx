import { useEffect, useRef, useState } from 'react'
import type { Project } from '../data/portfolio'
import { FlowRail } from './FlowRail'
import { Icon } from './Icon'
import { Mockup, mockSpecs } from './Mockups'

interface CaseStudyProps {
  project: Project
  anchor: string
  onClose: () => void
}

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'challenge', label: 'Business Challenge' },
  { id: 'workflow', label: 'Current Workflow' },
  { id: 'painpoints', label: 'Pain Points' },
  { id: 'approach', label: 'My Approach' },
  { id: 'rules', label: 'Business Rules' },
  { id: 'design', label: 'Solution Design' },
  { id: 'features', label: 'Key Features' },
  { id: 'screenshots', label: 'Screenshots' },
  { id: 'diagram', label: 'Workflow Diagram' },
  { id: 'tools', label: 'Tools Used' },
  { id: 'contribution', label: 'My Contribution' },
  { id: 'value', label: 'Potential Business Value' },
  { id: 'lessons', label: 'Lessons Learned' },
]

export function CaseStudy({ project, anchor, onClose }: CaseStudyProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [current, setCurrent] = useState(anchor || 'overview')

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null
    document.body.classList.add('is-locked')
    closeRef.current?.focus({ preventScroll: true })
    return () => {
      document.body.classList.remove('is-locked')
      previous?.focus?.({ preventScroll: true })
    }
  }, [])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const offsetWithin = (container: HTMLDivElement, target: HTMLElement) =>
    target.getBoundingClientRect().top - container.getBoundingClientRect().top + container.scrollTop

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return
    const target =
      document.getElementById(`cs-${project.id}-${anchor}`) ??
      document.getElementById(`cs-${project.id}-overview`)
    if (!target) return
    container.scrollTo({ top: Math.max(0, offsetWithin(container, target) - 12), behavior: 'auto' })
    setCurrent(anchor || 'overview')
  }, [anchor, project.id])

  const goTo = (id: string) => {
    const container = scrollRef.current
    const target = document.getElementById(`cs-${project.id}-${id}`)
    if (!container || !target) return
    container.scrollTo({ top: Math.max(0, offsetWithin(container, target) - 12), behavior: 'smooth' })
    setCurrent(id)
  }

  const onScroll = () => {
    const container = scrollRef.current
    if (!container) return
    let activeId = sections[0].id
    for (const section of sections) {
      const el = document.getElementById(`cs-${project.id}-${section.id}`)
      if (!el) continue
      if (offsetWithin(container, el) - 40 <= container.scrollTop) activeId = section.id
    }
    setCurrent(activeId)
  }

  return (
    <div className="cs-overlay" role="dialog" aria-modal="true" aria-labelledby={`cs-title-${project.id}`}>
      <button type="button" className="cs-backdrop" aria-label="Close case study" onClick={onClose} tabIndex={-1} />

      <div className="cs-dialog">
        <header className="cs-head">
          <div className="cs-head-main">
            <p className="cs-eyebrow">
              <span className="cs-num">Case Study {project.number}</span>
              {project.category}
            </p>
            <h2 className="cs-title" id={`cs-title-${project.id}`}>
              {project.name}
            </h2>
            <p className="cs-sub">{project.role}</p>
          </div>
          <button type="button" className="cs-close" onClick={onClose} ref={closeRef} aria-label="Close case study">
            <Icon name="close" size={18} />
          </button>
        </header>

        <div className="cs-body" ref={scrollRef} onScroll={onScroll}>
          <aside className="cs-toc" aria-label="Case study sections">
            <p className="cs-toc-label">Contents</p>
            <ul>
              {sections.map((section) => (
                <li key={section.id}>
                  <button
                    type="button"
                    className={`cs-toc-link${current === section.id ? ' is-active' : ''}`}
                    onClick={() => goTo(section.id)}
                  >
                    {section.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="cs-toc-note">
              <Icon name="info" size={13} />
              Concept and prototype work. No measured results are claimed.
            </div>
          </aside>

          <article className="cs-main">
            <section className="cs-section" id={`cs-${project.id}-overview`}>
              <h3>
                <span className="cs-section-label">01</span> Overview
              </h3>
              <p className="cs-text">{project.overview}</p>
              <div className="cs-meta-grid">
                <div>
                  <span className="cs-meta-label">Category</span>
                  <span className="cs-meta-value">{project.category}</span>
                </div>
                <div>
                  <span className="cs-meta-label">Project type</span>
                  <span className="cs-meta-value">Solution concept / prototype</span>
                </div>
                <div>
                  <span className="cs-meta-label">My role</span>
                  <span className="cs-meta-value">Operations requirements &amp; solution design</span>
                </div>
              </div>
            </section>

            <section className="cs-section" id={`cs-${project.id}-challenge`}>
              <h3>
                <span className="cs-section-label">02</span> Business Challenge
              </h3>
              <p className="cs-text">{project.challenge}</p>
            </section>

            <section className="cs-section" id={`cs-${project.id}-workflow`}>
              <h3>
                <span className="cs-section-label">03</span> Current Workflow
              </h3>
              <ol className="cs-numbered">
                {project.currentWorkflow.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </section>

            <section className="cs-section" id={`cs-${project.id}-painpoints`}>
              <h3>
                <span className="cs-section-label">04</span> Pain Points
              </h3>
              <ul className="cs-bullets cs-bullets--warn">
                {project.painPoints.map((item) => (
                  <li key={item}>
                    <Icon name="alert" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-approach`}>
              <h3>
                <span className="cs-section-label">05</span> My Approach
              </h3>
              <ul className="cs-bullets">
                {project.approach.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-rules`}>
              <h3>
                <span className="cs-section-label">06</span> Business Rules
              </h3>
              <ul className="cs-rule-list">
                {project.businessRules.map((rule, index) => (
                  <li key={rule}>
                    <span className="cs-rule-num">{String(index + 1).padStart(2, '0')}</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-design`}>
              <h3>
                <span className="cs-section-label">07</span> Solution Design
              </h3>
              <p className="cs-text">{project.solutionDesign}</p>
            </section>

            <section className="cs-section" id={`cs-${project.id}-features`}>
              <h3>
                <span className="cs-section-label">08</span> Key Features
              </h3>
              <ul className="cs-chip-grid">
                {project.features.map((feature) => (
                  <li key={feature}>
                    <Icon name="layers" size={13} />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-screenshots`}>
              <h3>
                <span className="cs-section-label">09</span> Screenshots
              </h3>
              <p className="cs-caption">
                Concept interface mockups — prepared to show the intended screen behaviour and information layout.
              </p>
              <div className="cs-gallery">
                {project.mockups.map((mockup) => (
                  <figure className="cs-figure" key={mockup.title}>
                    <Mockup spec={mockSpecs[project.id][mockup.variant]} />
                    <figcaption>
                      <strong>{mockup.title}</strong>
                      <span>{mockup.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>

            <section className="cs-section" id={`cs-${project.id}-diagram`}>
              <h3>
                <span className="cs-section-label">10</span> Workflow Diagram
              </h3>
              <FlowRail steps={project.workflow} light />
            </section>

            <section className="cs-section" id={`cs-${project.id}-tools`}>
              <h3>
                <span className="cs-section-label">11</span> Tools Used
              </h3>
              <ul className="cs-chip-row">
                {project.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-contribution`}>
              <h3>
                <span className="cs-section-label">12</span> My Contribution
              </h3>
              <ul className="cs-bullets">
                {project.contribution.map((item) => (
                  <li key={item}>
                    <Icon name="check" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section" id={`cs-${project.id}-value`}>
              <h3>
                <span className="cs-section-label">13</span> Potential Business Value
              </h3>
              <p className="cs-caption">
                Described qualitatively. No measured savings, volumes, or performance improvements are claimed.
              </p>
              <ul className="cs-bullets">
                {project.potentialValue.map((item) => (
                  <li key={item}>
                    <Icon name="target" size={14} />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            <section className="cs-section cs-section--last" id={`cs-${project.id}-lessons`}>
              <h3>
                <span className="cs-section-label">14</span> Lessons Learned
              </h3>
              <ul className="cs-quotes">
                {project.lessons.map((lesson) => (
                  <li key={lesson}>{lesson}</li>
                ))}
              </ul>
              <p className="cs-disclaimer">
                <Icon name="info" size={14} />
                {project.disclaimer}
              </p>
            </section>

            <div className="cs-foot">
              <button type="button" className="btn btn-outline" onClick={onClose}>
                Close case study
              </button>
              <a className="btn btn-primary" href="#contact" onClick={onClose}>
                Discuss this solution
                <Icon name="arrow" size={15} />
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}
