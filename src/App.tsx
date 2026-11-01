import { useCallback, useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { About } from './components/About'
import { BuildSteps } from './components/BuildSteps'
import { CaseStudy } from './components/CaseStudy'
import { Contact } from './components/Contact'
import { Controls } from './components/Controls'
import { DigitalSkills } from './components/DigitalSkills'
import { Experience } from './components/Experience'
import { Expertise } from './components/Expertise'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { InnovationLab } from './components/InnovationLab'
import { Nav } from './components/Nav'
import { ProcessImprovement } from './components/ProcessImprovement'
import { Solutions } from './components/Solutions'
import { ValueEquation } from './components/ValueEquation'
import { navLinks, projects } from './data/portfolio'
import { usePageScroll, useScrollReveal } from './lib/hooks'

const sectionIds = navLinks.map((link) => link.id)

interface OpenState {
  id: string
  anchor: string
}

const readHash = (): OpenState | null => {
  const match = window.location.hash.match(/^#solution\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?$/)
  if (!match) return null
  if (!projects.some((project) => project.id === match[1])) return null
  return { id: match[1], anchor: match[2] ?? 'overview' }
}

export default function App() {
  const { progress, scrolled, active } = usePageScroll(sectionIds)
  const [openCase, setOpenCase] = useState<OpenState | null>(() => readHash())

  useScrollReveal()

  useEffect(() => {
    const sync = () => setOpenCase(readHash())
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])

  const openProject = useCallback((id: string, anchor = 'overview') => {
    window.location.hash = `#solution/${id}/${anchor}`
    setOpenCase({ id, anchor })
  }, [])

  const closeProject = useCallback(() => {
    window.history.replaceState(null, '', window.location.pathname + window.location.search)
    setOpenCase(null)
  }, [])

  const project = openCase ? projects.find((item) => item.id === openCase.id) : undefined

  return (
    <>
      <div className="scroll-progress" style={{ '--p': progress } as CSSProperties} aria-hidden="true" />
      <a className="skip-link" href="#about">
        Skip to content
      </a>

      <Nav active={active} scrolled={scrolled} />

      <main>
        <Hero />
        <About />
        <Expertise />
        <Controls />
        <ProcessImprovement />
        <DigitalSkills />
        <Solutions onOpen={openProject} />
        <BuildSteps />
        <Experience />
        <ValueEquation />
        <InnovationLab />
        <Contact />
      </main>

      <Footer />

      {openCase && project ? (
        <CaseStudy project={project} anchor={openCase.anchor} onClose={closeProject} />
      ) : null}
    </>
  )
}
