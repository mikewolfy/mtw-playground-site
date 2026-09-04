export default function PlaygroundIllustration() {
  return (
    <svg
      className="playground-illustration"
      viewBox="0 0 1200 420"
      role="img"
      aria-label="Illustration of an elaborate play structure with two towers connected by a bridge, a climbing wall, slide, fireman's pole, plus a seesaw, spring riders, a spinner, monkey bars, and swings, set on a mulch surface surrounded by trees"
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
        {Array.from({ length: 70 }).map((_, i) => {
          const x = (i * 113) % 1200
          const y = 310 + ((i * 53) % 100)
          const w = 6 + (i % 4) * 2
          return <ellipse key={i} cx={x} cy={y} rx={w} ry={w / 2.5} transform={`rotate(${(i * 37) % 180} ${x} ${y})`} />
        })}
      </g>

      {/* Swing set (far left) */}
      <g>
        <rect x="110" y="150" width="10" height="140" fill="#8a5a30" />
        <rect x="250" y="150" width="10" height="140" fill="#8a5a30" />
        <rect x="105" y="145" width="160" height="10" fill="#a9713f" />
        <line x1="150" y1="155" x2="150" y2="240" stroke="#5b4636" strokeWidth="4" />
        <line x1="165" y1="155" x2="165" y2="240" stroke="#5b4636" strokeWidth="4" />
        <rect x="142" y="240" width="30" height="8" rx="3" fill="#0f766e" />
        <line x1="200" y1="155" x2="190" y2="230" stroke="#5b4636" strokeWidth="4" />
        <line x1="215" y1="155" x2="225" y2="230" stroke="#5b4636" strokeWidth="4" />
        <rect x="187" y="230" width="30" height="8" rx="3" fill="#fb7185" />
      </g>

      {/* Seesaw */}
      <g>
        <polygon points="335,300 365,300 350,272" fill="#0f766e" />
        <g transform="rotate(-9 350 282)">
          <rect x="292" y="278" width="116" height="9" rx="4" fill="#f59e0b" />
          <circle cx="300" cy="282" r="8" fill="#fb7185" />
          <circle cx="400" cy="282" r="8" fill="#fb7185" />
        </g>
      </g>

      {/* Spring riders */}
      {[
        { cx: 432, color: '#fb7185' },
        { cx: 472, color: '#f59e0b' },
      ].map((r, i) => (
        <g key={i}>
          <rect x={r.cx - 12} y="298" width="24" height="6" rx="2" fill="#8a5a30" />
          <path
            d={`M${r.cx},298 L${r.cx - 6},288 L${r.cx + 6},280 L${r.cx - 6},272 L${r.cx},264`}
            stroke="#7a8a8f"
            strokeWidth="3"
            fill="none"
          />
          <ellipse cx={r.cx} cy="254" rx="16" ry="11" fill={r.color} />
          <polygon points={`${r.cx - 11},247 ${r.cx - 7},235 ${r.cx - 3},247`} fill={r.color} />
          <polygon points={`${r.cx + 3},247 ${r.cx + 7},235 ${r.cx + 11},247`} fill={r.color} />
        </g>
      ))}

      {/* Climbing tower (secondary structure, left) */}
      <g>
        <rect x="503" y="214" width="10" height="86" fill="#a9713f" />
        <rect x="596" y="214" width="10" height="86" fill="#a9713f" />
        <rect x="498" y="208" width="112" height="14" fill="#0f766e" />
        <g stroke="#f59e0b" strokeWidth="5" strokeLinecap="round">
          <line x1="596" y1="178" x2="596" y2="208" />
          <line x1="606" y1="178" x2="606" y2="208" />
          <line x1="560" y1="178" x2="606" y2="178" />
        </g>
        {/* Climbing wall */}
        <rect x="500" y="234" width="58" height="66" rx="5" fill="#fb7185" />
        {[
          [514, 250, '#0f766e'],
          [538, 246, '#f59e0b'],
          [524, 266, '#f59e0b'],
          [548, 268, '#0f766e'],
          [512, 284, '#f59e0b'],
          [540, 288, '#0f766e'],
          [526, 296, '#fde68a'],
        ].map(([cx, cy, fill], i) => (
          <circle key={i} cx={cx as number} cy={cy as number} r="5" fill={fill as string} />
        ))}
      </g>

      {/* Bridge connecting the two towers */}
      <g>
        <rect x="606" y="208" width="54" height="14" fill="#0f766e" />
        <line x1="606" y1="178" x2="660" y2="178" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
        <line x1="620" y1="178" x2="620" y2="208" stroke="#f59e0b" strokeWidth="4" />
        <line x1="645" y1="178" x2="645" y2="208" stroke="#f59e0b" strokeWidth="4" />
      </g>

      {/* Main play tower (roof, slide, fireman's pole) */}
      <g>
        {/* Lower platform posts */}
        <rect x="660" y="180" width="12" height="120" fill="#a9713f" />
        <rect x="888" y="180" width="12" height="120" fill="#a9713f" />
        {/* Upper platform posts */}
        <rect x="750" y="140" width="12" height="160" fill="#a9713f" />
        <rect x="830" y="140" width="12" height="160" fill="#a9713f" />

        {/* Upper platform + roof */}
        <rect x="745" y="130" width="105" height="14" fill="#0f766e" />
        <polygon points="730,130 797,90 865,130" fill="#fb7185" />
        <polygon points="730,130 797,90 865,130" fill="#f43f5e" opacity="0.25" />

        {/* Lower platform */}
        <rect x="655" y="200" width="250" height="14" fill="#0f766e" />
        <rect x="655" y="200" width="250" height="14" fill="#0b5c56" opacity="0.3" />

        {/* Railings (open on the bridge-facing side) */}
        <g stroke="#f59e0b" strokeWidth="5" strokeLinecap="round">
          <line x1="700" y1="150" x2="890" y2="150" />
          <line x1="700" y1="150" x2="700" y2="200" />
          <line x1="890" y1="150" x2="890" y2="200" />
        </g>

        {/* Fireman's pole */}
        <line x1="800" y1="206" x2="800" y2="300" stroke="#5b4636" strokeWidth="5" strokeLinecap="round" />
        <circle cx="800" cy="210" r="6" fill="#f59e0b" />

        {/* Slide */}
        <path d="M905,206 C 945,214 962,250 965,300 L951,300 C 948,255 932,222 897,216 Z" fill="#f59e0b" />
        <path d="M905,206 C 945,214 962,250 965,300" fill="none" stroke="#c8790c" strokeWidth="3" />
      </g>

      {/* Spinner */}
      <g>
        <ellipse cx="1010" cy="299" rx="32" ry="10" fill="#0b5c56" opacity="0.25" />
        <ellipse cx="1010" cy="294" rx="32" ry="11" fill="#f59e0b" />
        <ellipse cx="1010" cy="291" rx="27" ry="9" fill="#fb7185" />
        <circle cx="1010" cy="291" r="5" fill="#0f766e" />
        <g stroke="#0f766e" strokeWidth="3" strokeLinecap="round">
          <line x1="1010" y1="291" x2="986" y2="291" />
          <line x1="1010" y1="291" x2="1034" y2="291" />
          <line x1="1010" y1="291" x2="1010" y2="283" />
          <line x1="1010" y1="291" x2="1010" y2="299" />
        </g>
      </g>

      {/* Monkey bars (far right) */}
      <g stroke="#5b4636" strokeWidth="6">
        <line x1="1065" y1="300" x2="1065" y2="200" />
        <line x1="1180" y1="300" x2="1180" y2="200" />
        <line x1="1065" y1="205" x2="1180" y2="205" />
        {[1085, 1108, 1131, 1154].map((x) => (
          <line key={x} x1={x} y1="205" x2={x} y2="220" strokeWidth="4" />
        ))}
      </g>

      {/* Kids (simple pictogram figures) */}
      <g strokeLinecap="round" strokeLinejoin="round">
        {[
          { x: 262, y: 278, scale: 0.8, head: '#0f766e', body: '#f59e0b' },
          { x: 530, y: 264, scale: 0.9, head: '#fb7185', body: '#2f6b4f' },
          { x: 962, y: 268, scale: 0.95, head: '#f59e0b', body: '#0f766e' },
          { x: 1120, y: 262, scale: 0.85, head: '#0f766e', body: '#fb7185' },
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
