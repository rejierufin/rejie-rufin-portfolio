import { useEffect, useState } from 'react'
import { navLinks } from '../data/portfolio'
import { Icon } from './Icon'

interface NavProps {
  active: string
  scrolled: boolean
}

export function Nav({ active, scrolled }: NavProps) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            RR
          </span>
          <span className="brand-text">
            <strong>REJIE RUFIN</strong>
            <em>Freight Forwarding · Digital Solutions</em>
          </span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`nav-link${active === link.id ? ' is-active' : ''}`}
              href={`#${link.id}`}
              aria-current={active === link.id ? 'true' : undefined}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="btn btn-primary btn-sm" href="#solutions">
            View My Work
            <Icon name="arrow" size={15} />
          </a>
          <button
            type="button"
            className="nav-toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((value) => !value)}
          >
            <Icon name={open ? 'close' : 'menu'} size={20} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`nav-mobile${open ? ' is-open' : ''}`}>
        <div className="wrap">
          {navLinks.map((link) => (
            <a
              key={link.id}
              className={`nav-link${active === link.id ? ' is-active' : ''}`}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
              <Icon name="arrow" size={15} />
            </a>
          ))}
          <a className="btn btn-primary" href="#solutions" onClick={() => setOpen(false)}>
            View My Work
            <Icon name="arrow" size={16} />
          </a>
        </div>
      </div>
    </header>
  )
}
