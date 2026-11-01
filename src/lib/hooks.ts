import { useEffect, useState } from 'react'

/** Adds `.is-visible` to every `[data-reveal]` element once it scrolls into view. */
export function useScrollReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    if (typeof IntersectionObserver === 'undefined') {
      elements.forEach((el) => el.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Scroll progress, nav shadow state, and the section currently in view. */
export function usePageScroll(sectionIds: readonly string[]) {
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState(sectionIds[0] ?? '')

  useEffect(() => {
    let frame = 0

    const update = () => {
      frame = 0
      const doc = document.documentElement
      const max = doc.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
      setScrolled(window.scrollY > 16)

      const probe = window.scrollY + 150
      let current = sectionIds[0] ?? ''
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= probe) current = id
      }
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 8) {
        current = sectionIds[sectionIds.length - 1] ?? current
      }
      setActive(current)
    }

    const onScroll = () => {
      if (frame) return
      frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [sectionIds])

  return { progress, scrolled, active }
}
