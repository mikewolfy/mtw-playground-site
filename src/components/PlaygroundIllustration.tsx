export default function PlaygroundIllustration() {
  return (
    <svg
      className="playground-illustration"
      viewBox="0 0 1200 420"
      role="img"
      aria-label="Illustration of a wooden play structure with a slide, swings, and monkey bars, set on a mulch surface surrounded by trees"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#eaf6f2" />
          <stop offset="100%" stopColor="#fbf3e3" />
        </linearGradient>
        <linearGradient id="mulch" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#a9713f" />
          <stop offset="100%" stopColor="#8a5a30" />
        </linearGradient>
      </defs>

      <rect width="1200" height="420" fill="url(#sky)" />

      {/* Tree line */}
      <g opacity="0.9">
        {[
          [60, 210, 70],
          [150, 190, 90],
          [250, 215, 60],
          [980, 205, 75],
          [1080, 185, 95],
          [1150, 220, 55],
          [40, 230, 50],
          [1170, 235, 45],
        ].map(([x, y, r], i) => (
          <g key={i}>
            <rect x={x - 6} y={y + r * 0.6} width="12" height="80" fill="#6b4a2a" />
            <circle cx={x} cy={y} r={r} fill={i % 2 === 0 ? '#2f6b4f' : '#3a7d5c'} />
            <circle cx={x - r * 0.4} cy={y - r * 0.3} r={r * 0.6} fill={i % 2 === 0 ? '#357759' : '#468a68'} />
          </g>
        ))}
      </g>

      {/* Ground / mulch */}
      <path d="M0,300 Q600,260 1200,300 L1200,420 L0,420 Z" fill="url(#mulch)" />
      <g fill="#7a4d28" opacity="0.5">
        {Array.from({ length: 60 }).map((_, i) => {
          const x = (i * 137) % 1200
          const y = 310 + ((i * 53) % 100)
          const w = 6 + (i % 4) * 2
          return <ellipse key={i} cx={x} cy={y} rx={w} ry={w / 2.5} transform={`rotate(${(i * 37) % 180} ${x} ${y})`} />
        })}
      </g>

      {/* Swing set (left) */}
      <g>
        <rect x="120" y="150" width="10" height="140" fill="#8a5a30" />
        <rect x="260" y="150" width="10" height="140" fill="#8a5a30" />
        <rect x="115" y="145" width="160" height="10" fill="#a9713f" />
        <line x1="160" y1="155" x2="160" y2="240" stroke="#5b4636" strokeWidth="4" />
        <line x1="175" y1="155" x2="175" y2="240" stroke="#5b4636" strokeWidth="4" />
        <rect x="152" y="240" width="30" height="8" rx="3" fill="#0f766e" />
        <line x1="210" y1="155" x2="200" y2="230" stroke="#5b4636" strokeWidth="4" />
        <line x1="225" y1="155" x2="235" y2="230" stroke="#5b4636" strokeWidth="4" />
        <rect x="197" y="230" width="30" height="8" rx="3" fill="#fb7185" />
      </g>

      {/* Main play structure (center) */}
      <g>
        {/* Platform posts */}
        <rect x="470" y="180" width="12" height="120" fill="#a9713f" />
        <rect x="470" y="180" width="12" height="120" fill="#a9713f" />
        <rect x="700" y="180" width="12" height="120" fill="#a9713f" />
        <rect x="560" y="140" width="12" height="160" fill="#a9713f" />
        <rect x="640" y="140" width="12" height="160" fill="#a9713f" />

        {/* Upper platform + roof */}
        <rect x="555" y="130" width="105" height="14" fill="#0f766e" />
        <polygon points="540,130 607,90 675,130" fill="#fb7185" />
        <polygon points="540,130 607,90 675,130" fill="#f43f5e" opacity="0.25" />

        {/* Lower platform */}
        <rect x="465" y="200" width="255" height="14" fill="#0f766e" />
        <rect x="465" y="200" width="255" height="14" fill="#0b5c56" opacity="0.3" />

        {/* Railings */}
        <g stroke="#f59e0b" strokeWidth="5" strokeLinecap="round">
          <line x1="482" y1="150" x2="482" y2="200" />
          <line x1="510" y1="150" x2="510" y2="200" />
          <line x1="700" y1="150" x2="700" y2="200" />
          <line x1="482" y1="150" x2="700" y2="150" />
        </g>

        {/* Slide */}
        <path
          d="M720,205 C 800,215 860,260 900,300 L880,300 C 845,265 795,230 715,220 Z"
          fill="#f59e0b"
        />
        <path d="M720,205 C 800,215 860,260 900,300" fill="none" stroke="#c8790c" strokeWidth="3" />

        {/* Ladder */}
        <g stroke="#5b4636" strokeWidth="5" strokeLinecap="round">
          <line x1="475" y1="214" x2="455" y2="300" />
          <line x1="510" y1="214" x2="500" y2="300" />
          <line x1="462" y1="240" x2="503" y2="238" />
          <line x1="459" y1="265" x2="501" y2="263" />
          <line x1="456" y1="288" x2="499" y2="286" />
        </g>
      </g>

      {/* Monkey bars (right) */}
      <g stroke="#5b4636" strokeWidth="6">
        <line x1="880" y1="300" x2="880" y2="200" />
        <line x1="1000" y1="300" x2="1000" y2="200" />
        <line x1="880" y1="205" x2="1000" y2="205" />
        {[900, 925, 950, 975].map((x) => (
          <line key={x} x1={x} y1="205" x2={x} y2="220" strokeWidth="4" />
        ))}
      </g>

      {/* Kids (simple pictogram figures) */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {[
          { x: 615, y: 262, scale: 1, head: '#f59e0b', body: '#0f766e' },
          { x: 905, y: 264, scale: 0.95, head: '#fb7185', body: '#2f6b4f' },
          { x: 205, y: 268, scale: 0.85, head: '#0f766e', body: '#f59e0b' },
        ].map((k, i) => (
          <g key={i} transform={`translate(${k.x} ${k.y}) scale(${k.scale})`}>
            <circle cx="0" cy="-26" r="9" fill={k.head} />
            <path d="M-11,4 C-11,-14 11,-14 11,4 L9,26 L-9,26 Z" fill={k.body} />
            <path d="M-9,10 L-20,-2 M9,10 L20,-2" stroke={k.body} strokeWidth="5" fill="none" />
            <path d="M-6,26 L-9,40 M6,26 L9,40" stroke={k.head} strokeWidth="6" fill="none" />
          </g>
        ))}
      </g>
    </svg>
  )
}
