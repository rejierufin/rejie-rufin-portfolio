import { navLinks, profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                RR
              </span>
              <span className="brand-text">
                <strong>REJIE RUFIN</strong>
              </span>
            </a>
            <p className="footer-role">
              Freight Forwarding Operations | Process Improvement | Power Apps | AI-Assisted Solutions
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigate</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.id} href={`#${link.id}`}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h4>Connect</h4>
            <div className="socials">
              <a className="social-btn" href={`mailto:${profile.email}`} aria-label="Email Rejie Rufin">
                <Icon name="mail" size={16} />
              </a>
              <a
                className="social-btn"
                href={profile.linkedin}
                aria-label="LinkedIn profile"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="linkedin" size={16} />
              </a>
              <a
                className="social-btn"
                href={profile.github}
                aria-label="GitHub profile"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Icon name="github" size={16} />
              </a>
              <a
                className="social-btn"
                href={profile.resumeUrl}
                aria-label="Download resume"
                download
              >
                <Icon name="download" size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            &copy; {new Date().getFullYear()} Rejie Rufin
            <span className="dot-sep">·</span>
            From Operational Challenges to Smarter Digital Solutions.
          </span>
          <a className="to-top" href="#home">
            Back to top
            <Icon name="arrowUp" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
