import { useState } from 'react'
import { heroIndicators, profile } from '../data/portfolio'
import { Icon } from './Icon'

const stripItems = [
  'Ocean Freight Operations',
  'Import & Pre-Arrival',
  'Manifest & EDI',
  'Shipment Data Validation',
  'Microsoft Power Apps',
  'AI-Assisted No-Code',
]

export function Hero() {
  const [hasPhoto, setHasPhoto] = useState(true)

  return (
    <section className="hero" id="home">
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-horizon" aria-hidden="true" />

      <div className="hero-inner">
        <div className="hero-copy">
          <span className="hero-eyebrow">
            <span className="pulse" aria-hidden="true" />
            Hello, I&rsquo;m Rejie Rufin.
          </span>

          <h1 className="hero-title">
            From Operational Challenges to <span className="grad">Smarter Digital Solutions.</span>
          </h1>

          <p className="hero-positioning">
            {[
              'Freight Forwarding Operations Specialist',
              'Process Improvement',
              'Microsoft Power Apps',
              'AI-Assisted No-Code Solutions',
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </p>

          <p className="hero-desc">{profile.heroDescription}</p>

          <div className="hero-ctas">
            <a className="btn btn-primary" href="#solutions">
              View My Solutions
              <Icon name="arrow" size={17} />
            </a>
            <a className="btn btn-ghost" href="#expertise">
              Explore My Expertise
            </a>
            <a className="btn btn-quiet" href="#contact">
              Contact Me
              <Icon name="arrow" size={16} />
            </a>
          </div>

          <ul className="hero-indicators" aria-label="Core areas of expertise">
            {heroIndicators.map((indicator) => (
              <li key={indicator}>{indicator}</li>
            ))}
          </ul>
        </div>

        <div className="hero-portrait">
          <div className="portrait-frame">
            {hasPhoto ? (
              <img
                src="/portrait.jpg"
                alt="Portrait of Rejie Rufin"
                className="portrait-img"
                onError={() => setHasPhoto(false)}
                loading="eager"
              />
            ) : (
              <div className="portrait-placeholder" aria-hidden="true">
                <svg viewBox="0 0 420 520" preserveAspectRatio="xMidYMid slice">
                  <defs>
                    <linearGradient id="pg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="#2f6bff" stopOpacity="0.28" />
                      <stop offset="1" stopColor="#38d6f0" stopOpacity="0.04" />
                    </linearGradient>
                  </defs>
                  <path d="M0 430h420M0 466h420M0 502h420" stroke="url(#pg)" strokeWidth="1" />
                  <g stroke="url(#pg)" fill="none" strokeWidth="1.2">
                    <path d="M40 402h64v26H40zM112 402h64v26h-64zM184 402h64v26h-64zM40 368h64v26H40zM112 368h64v26h-64z" />
                  </g>
                  <g stroke="#8fb6ff" strokeOpacity="0.16" fill="none" strokeWidth="1">
                    <path d="M300 40v300M300 40h-90M300 120h-64M300 200h-110M300 280h-84" />
                    <circle cx="300" cy="40" r="3" />
                    <circle cx="210" cy="40" r="2" />
                  </g>
                  <path d="M0 340h420" stroke="#8fb6ff" strokeOpacity="0.1" />
                </svg>
                <div className="portrait-monogram">
                  <strong>RR</strong>
                  <span>Portrait</span>
                </div>
              </div>
            )}

            <div className="portrait-caption">
              <div>
                <span className="pc-name">Rejie Rufin</span>
                <span className="pc-role">Freight Forwarding Operations</span>
              </div>
              <span className="pc-badge">Operations First</span>
            </div>
          </div>

          <div className="portrait-card portrait-card--tl" aria-hidden="true">
            <span className="pc-ico">
              <Icon name="flow" size={16} />
            </span>
            <span>
              <span className="pc-label">Approach</span>
              <span className="pc-value">Understand the operation</span>
            </span>
          </div>

          <div className="portrait-card portrait-card--br" aria-hidden="true">
            <span className="pc-ico">
              <Icon name="sliders" size={16} />
            </span>
            <span>
              <span className="pc-label">Solution focus</span>
              <span className="pc-value">Validation &amp; control</span>
            </span>
          </div>

          <span className="portrait-corner portrait-corner--tr" aria-hidden="true" />
          <span className="portrait-corner portrait-corner--bl" aria-hidden="true" />
        </div>
      </div>

      <div className="hero-strip">
        <div className="hero-strip-inner">
          <span className="strip-tag">Focus Areas</span>
          <ul className="strip-items">
            {stripItems.map((item) => (
              <li key={item}>
                <Icon name="check" size={13} />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
