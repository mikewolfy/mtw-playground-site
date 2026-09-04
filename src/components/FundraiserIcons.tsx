import type { FundraiserIcon } from '../data/fundraisers'

function IceCreamIcon() {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" aria-hidden="true">
      <polygon points="15,21 33,21 24,42" fill="#c8790c" />
      <path d="M17,24 L31,24 M18.2,29 L29.8,29 M19.4,34 L28.6,34" stroke="#a9611c" strokeWidth="1" />
      <circle cx="24" cy="18" r="9" fill="#fda4af" />
      <circle cx="18" cy="11" r="6.5" fill="#fde68a" />
      <circle cx="17" cy="9.5" r="2" fill="#fff" opacity="0.6" />
    </svg>
  )
}

function OrnamentIcon() {
  return (
    <svg viewBox="0 0 48 48" width="32" height="32" aria-hidden="true">
      <rect x="21" y="6" width="6" height="6" rx="1.5" fill="#9ca3af" />
      <path d="M22,10 Q24,6 26,10" fill="none" stroke="#6b7280" strokeWidth="2" />
      <circle cx="24" cy="27" r="14" fill="#fb7185" />
      <path d="M12,24 Q24,20 36,24" fill="none" stroke="#f43f5e" strokeWidth="2" opacity="0.5" />
      <ellipse cx="19" cy="21" rx="4" ry="5" fill="#fff" opacity="0.35" />
    </svg>
  )
}

const ICONS: Record<FundraiserIcon, () => JSX.Element> = {
  'ice-cream': IceCreamIcon,
  ornament: OrnamentIcon,
}

export default function FundraiserIconGraphic({ icon }: { icon: FundraiserIcon }) {
  const Icon = ICONS[icon]
  return <Icon />
}
