import type { CSSProperties } from 'react'
import { contact, profile } from '../data/portfolio'
import { Icon } from './Icon'

export function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div data-reveal>
            <p className="eyebrow">
              <span className="eyebrow-line" aria-hidden="true" />
              11 — Contact
            </p>
            <h2>{contact.title}</h2>
            <p className="contact-lead">{contact.text}</p>

            <p className="contact-open">
              <Icon name="briefcase" size={16} />
              {contact.openness}
            </p>
          </div>

          <div data-reveal style={{ '--d': '90ms' } as CSSProperties}>
            <div className="contact-list">
              <a className="contact-item" href={`mailto:${profile.email}`}>
                <span className="co-icon" aria-hidden="true">
                  <Icon name="mail" size={16} />
                </span>
                <span>
                  <span className="co-label">Email</span>
                  <span className="co-value">{profile.email}</span>
                </span>
                <span className="co-arrow" aria-hidden="true">
                  <Icon name="arrow" size={15} />
                </span>
              </a>

              <a className="contact-item" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
                <span className="co-icon" aria-hidden="true">
                  <Icon name="linkedin" size={16} />
                </span>
                <span>
                  <span className="co-label">LinkedIn</span>
                  <span className="co-value">{profile.linkedinLabel}</span>
                </span>
                <span className="co-arrow" aria-hidden="true">
                  <Icon name="external" size={14} />
                </span>
              </a>

              <a className="contact-item" href={profile.github} target="_blank" rel="noreferrer noopener">
                <span className="co-icon" aria-hidden="true">
                  <Icon name="github" size={16} />
                </span>
                <span>
                  <span className="co-label">GitHub</span>
                  <span className="co-value">{profile.githubLabel}</span>
                </span>
                <span className="co-arrow" aria-hidden="true">
                  <Icon name="external" size={14} />
                </span>
              </a>

              <div className="contact-item">
                <span className="co-icon" aria-hidden="true">
                  <Icon name="pin" size={16} />
                </span>
                <span>
                  <span className="co-label">Location</span>
                  <span className="co-value">{profile.location} · open to remote roles</span>
                </span>
              </div>
            </div>

            <div className="contact-cta">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>
                Send an Email
                <Icon name="arrow" size={16} />
              </a>
              <a className="btn btn-ghost" href={profile.resumeUrl} download>
                <Icon name="download" size={16} />
                Download Resume
              </a>
            </div>

            {profile.resumePassword ? (
              <p className="contact-resume-note">
                The resume PDF is password-protected. Password: <strong>{profile.resumePassword}</strong>
              </p>
            ) : null}

            <p className="contact-fineprint">
              Phone number and home address are intentionally not published.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
