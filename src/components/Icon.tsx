import type { CSSProperties, ReactNode } from 'react'
import type { IconName } from '../data/portfolio'

const icons: Record<string, ReactNode> = {
  ship: (
    <>
      <path d="M3 14.5h18l-2.2 5.1a2 2 0 0 1-1.8 1.2H7a2 2 0 0 1-1.8-1.2L3 14.5Z" />
      <path d="M6.5 14.5v-5h8l3 5" />
      <path d="M9.5 9.5V6h3" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 7.2V21" />
      <path d="M5.8 12H4a8 8 0 0 0 16 0h-1.8" />
      <path d="M9 12h6" />
    </>
  ),
  route: (
    <>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8.5 6h5.5a4 4 0 0 1 0 8H10a3.5 3.5 0 0 0 0 7h5.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M12 7v5.4l3.4 2" />
    </>
  ),
  swap: (
    <>
      <path d="M4 8.5h13l-3-3" />
      <path d="M20 15.5H7l3 3" />
    </>
  ),
  container: (
    <>
      <rect x="2.8" y="7" width="18.4" height="10" rx="1.6" />
      <path d="M7 7v10M11 7v10M15 7v10" />
    </>
  ),
  file: (
    <>
      <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8l-5-5Z" />
      <path d="M14 3v5h5" />
      <path d="M9 13h6M9 17h4" />
    </>
  ),
  doc: (
    <>
      <rect x="4.5" y="3" width="15" height="18" rx="2" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </>
  ),
  check: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="m8 12.2 2.6 2.6L16 9.4" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3 5 6v5.6c0 4.3 2.9 7.6 7 9.4 4.1-1.8 7-5.1 7-9.4V6l-7-3Z" />
      <path d="m9 12 2.1 2.1L15.3 10" />
    </>
  ),
  code: <path d="m9 8-4 4 4 4M15 8l4 4-4 4" />,
  hash: <path d="M9 3 7.5 21M16.5 3 15 21M4 8.5h16M3.5 15.5h16" />,
  alert: (
    <>
      <path d="M12 4 3.3 19.2a.9.9 0 0 0 .8 1.3h15.8a.9.9 0 0 0 .8-1.3L12 4Z" />
      <path d="M12 9.4v4.6" />
      <circle cx="12" cy="17.2" r="0.75" fill="currentColor" stroke="none" />
    </>
  ),
  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.5" ry="3" />
      <path d="M4.5 6v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3V6" />
      <path d="M4.5 12v6c0 1.7 3.4 3 7.5 3s7.5-1.3 7.5-3v-6" />
    </>
  ),
  gauge: (
    <>
      <path d="M4 17.5a9 9 0 1 1 16 0" />
      <path d="m12 13.6 4-3.4" />
      <circle cx="12" cy="15.4" r="1.5" />
    </>
  ),
  chart: (
    <>
      <path d="M4 3.5V20h16.5" />
      <rect x="7" y="12" width="3" height="5" rx="0.6" />
      <rect x="12" y="8.5" width="3" height="8.5" rx="0.6" />
      <rect x="17" y="5.5" width="3" height="11.5" rx="0.6" />
    </>
  ),
  users: (
    <>
      <circle cx="9.2" cy="8" r="3.2" />
      <path d="M3.5 20a5.7 5.7 0 0 1 11.4 0" />
      <path d="M16 5.4a3.2 3.2 0 0 1 0 6.2" />
      <path d="M17.6 14.5A5.7 5.7 0 0 1 20.5 19.6" />
    </>
  ),
  link: (
    <>
      <path d="M10.2 13.4a4 4 0 0 0 5.7 0l2.4-2.4a4 4 0 0 0-5.7-5.7l-1.2 1.2" />
      <path d="M13.8 10.6a4 4 0 0 0-5.7 0l-2.4 2.4a4 4 0 0 0 5.7 5.7l1.2-1.2" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <circle cx="12" cy="12" r="4.4" />
      <circle cx="12" cy="12" r="1" fill="currentColor" stroke="none" />
    </>
  ),
  layers: (
    <>
      <path d="m12 3 8.5 4.6L12 12.2 3.5 7.6 12 3Z" />
      <path d="m3.5 12.2 8.5 4.6 8.5-4.6" />
      <path d="m3.5 16.6 8.5 4.6 8.5-4.6" />
    </>
  ),
  flow: (
    <>
      <rect x="3" y="4" width="6" height="5" rx="1.3" />
      <rect x="15" y="15" width="6" height="5" rx="1.3" />
      <path d="M9 6.5h4a2 2 0 0 1 2 2v9" />
      <path d="M9.5 17.5H15" />
    </>
  ),
  app: (
    <>
      <rect x="3.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="13.5" y="3.5" width="7" height="7" rx="1.6" />
      <rect x="3.5" y="13.5" width="7" height="7" rx="1.6" />
      <path d="M17 13.5v7M13.5 17h7" />
    </>
  ),
  table: (
    <>
      <rect x="3" y="4.5" width="18" height="15" rx="2" />
      <path d="M3 9.5h18M9 9.5v10M15 9.5v10" />
    </>
  ),
  grid: (
    <>
      <rect x="3" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="3" width="7.5" height="7.5" rx="1.5" />
      <rect x="3" y="13.5" width="7.5" height="7.5" rx="1.5" />
      <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="1.5" />
    </>
  ),
  spark: (
    <>
      <path d="m11 3 1.8 4.9L17.7 9.7l-4.9 1.8L11 16.4 9.2 11.5 4.3 9.7l4.9-1.8L11 3Z" />
      <path d="m18 15 .7 1.9 1.9.7-1.9.7-.7 1.9-.7-1.9-1.9-.7 1.9-.7.7-1.9Z" />
    </>
  ),
  wand: (
    <>
      <path d="m4 20 9.5-9.5" />
      <path d="m13.5 5 1-2 1 2 2 1-2 1-1 2-1-2-2-1 2-1Z" />
      <path d="m18 13 .5 1.4 1.4.5-1.4.5-.5 1.4-.5-1.4-1.4-.5 1.4-.5.5-1.4Z" />
      <path d="m6.5 4.5.5 1.4 1.4.5-1.4.5L6.5 8.3 6 6.9l-1.4-.5L6 5.9l.5-1.4Z" />
    </>
  ),
  prompt: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="m7 9.2 3 2.8-3 2.8M13 15h4" />
    </>
  ),
  monitor: (
    <>
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M9 20h6M12 16v4" />
    </>
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </>
  ),
  cloud: <path d="M7 18a4 4 0 0 1-.4-8 5.5 5.5 0 0 1 10.6 1.3A3.6 3.6 0 0 1 17.5 18H7Z" />,
  message: <path d="M21 11.5a8.5 8.5 0 0 1-8.5 8.5H8l-5 3V15.6A8.5 8.5 0 0 1 11.5 3H12a9 9 0 0 1 9 8.5Z" />,
  briefcase: (
    <>
      <rect x="3" y="7.5" width="18" height="12" rx="2" />
      <path d="M9 7.5v-2A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5v2M3 12.5h18" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s7-6 7-11a7 7 0 1 0-14 0c0 5 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </>
  ),
  arrow: <path d="M4 12h15M13 6l6 6-6 6" />,
  repeat: (
    <>
      <path d="M4 9.5a5 5 0 0 1 5-5h9" />
      <path d="m15 1.5 3 3-3 3" />
      <path d="M20 14.5a5 5 0 0 1-5 5H6" />
      <path d="m9 22.5-3-3 3-3" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.6" />
      <path d="m15.9 15.9 4.3 4.3" />
    </>
  ),
  sliders: (
    <>
      <path d="M4 7h8M16 7h4M4 12h3M11 12h9M4 17h8M16 17h4" />
      <circle cx="14" cy="7" r="2" />
      <circle cx="9" cy="12" r="2" />
      <circle cx="14" cy="17" r="2" />
    </>
  ),
  play: <path d="M8.5 5.2v13.6L19 12 8.5 5.2Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="m6 6 12 12M18 6 6 18" />,
  download: (
    <>
      <path d="M12 3.5v11.5" />
      <path d="m7 10.5 5 5 5-5" />
      <path d="M4.5 20h15" />
    </>
  ),
  external: (
    <>
      <path d="M14 4h6v6" />
      <path d="M20 4 10.5 13.5" />
      <path d="M18.5 14v4.5a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2H10" />
    </>
  ),
  arrowUp: <path d="M12 20V4M6 10l6-6 6 6" />,
  plus: <path d="M12 5v14M5 12h14" />,
  info: (
    <>
      <circle cx="12" cy="12" r="8.8" />
      <path d="M12 11v5.4" />
      <circle cx="12" cy="8" r="0.8" fill="currentColor" stroke="none" />
    </>
  ),
  linkedin: (
    <path
      d="M6.94 8.6H3.5V21h3.44V8.6ZM5.22 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4ZM21 14.4c0-3.5-1.87-5.12-4.36-5.12-1.7 0-2.6.94-3 1.6V8.6h-3.4V21h3.44v-6.6c0-1.5.7-2.3 1.9-2.3 1.13 0 1.72.8 1.72 2.3V21H21v-6.6Z"
      fill="currentColor"
      stroke="none"
    />
  ),
  github: (
    <path
      d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.88 1.52 2.31 1.08 2.87.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"
      fill="currentColor"
      stroke="none"
    />
  ),
}

export interface IconProps {
  name: IconName | keyof typeof icons
  size?: number
  className?: string
  style?: CSSProperties
  strokeWidth?: number
}

export function Icon({ name, size = 18, className, style, strokeWidth = 1.6 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
    >
      {icons[name] ?? icons.info}
    </svg>
  )
}
