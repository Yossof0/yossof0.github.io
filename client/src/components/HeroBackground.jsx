export default function HeroBackground() {
  return (
    <svg
      className="hero-bg-svg"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMax slice"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#2a1a4d" />
          <stop offset="100%" stopColor="#1a1030" />
        </linearGradient>
        <linearGradient id="lightBeam" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#7c3aed" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#7c3aed" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="monitorGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9d5ff5" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#9d5ff5" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Faint wall wash, bottom area only, very low opacity */}
      <rect
        x="0"
        y="430"
        width="1200"
        height="170"
        fill="url(#wallGrad)"
        opacity="0.10"
      />

      {/* Light beam streaks across wall */}
      <polygon
        points="780,430 880,430 760,600 660,600"
        fill="url(#lightBeam)"
      />
      <polygon
        points="950,430 1010,430 940,600 880,600"
        fill="url(#lightBeam)"
      />

      {/* Desk surface line */}
      <line
        x1="560"
        y1="560"
        x2="1180"
        y2="560"
        stroke="#7c3aed"
        strokeWidth="1"
        opacity="0.18"
      />

      {/* Desk legs */}
      <line
        x1="600"
        y1="560"
        x2="585"
        y2="600"
        stroke="#7c3aed"
        strokeWidth="1"
        opacity="0.15"
      />
      <line
        x1="1140"
        y1="560"
        x2="1155"
        y2="600"
        stroke="#7c3aed"
        strokeWidth="1"
        opacity="0.15"
      />

      {/* Monitor silhouette */}
      <g opacity="0.22">
        <rect
          x="850"
          y="470"
          width="140"
          height="86"
          rx="4"
          fill="none"
          stroke="#9d5ff5"
          strokeWidth="1.5"
        />
        <rect
          x="858"
          y="478"
          width="124"
          height="70"
          rx="2"
          fill="#9d5ff5"
          opacity="0.15"
        />
        <line
          x1="920"
          y1="556"
          x2="920"
          y2="572"
          stroke="#9d5ff5"
          strokeWidth="1.5"
        />
        <line
          x1="895"
          y1="572"
          x2="945"
          y2="572"
          stroke="#9d5ff5"
          strokeWidth="1.5"
        />
      </g>
      <circle cx="920" cy="510" r="60" fill="url(#monitorGlow)" />

      {/* Desk lamp silhouette */}
      <g
        opacity="0.18"
        stroke="#7c3aed"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      >
        <line x1="1040" y1="560" x2="1040" y2="525" />
        <line x1="1040" y1="525" x2="1075" y2="500" />
        <ellipse cx="1080" cy="497" rx="10" ry="6" />
      </g>

      {/* Plant silhouette, left of desk */}
      <g
        opacity="0.16"
        stroke="#9d5ff5"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
      >
        <rect x="640" y="540" width="26" height="20" rx="2" />
        <path d="M 653 540 Q 630 510 615 495" />
        <path d="M 653 540 Q 660 500 650 470" />
        <path d="M 653 540 Q 680 505 690 480" />
      </g>

      {/* Small decorative items on desk */}
      <g opacity="0.15" fill="none" stroke="#9d5ff5" strokeWidth="1.2">
        <rect x="700" y="540" width="14" height="20" rx="1" />
        <circle cx="780" cy="548" r="8" />
      </g>

      {/* Soft ambient glow corners, kept subtle */}
      <circle
        cx="120"
        cy="100"
        r="170"
        fill="url(#monitorGlow)"
        opacity="0.4"
      />

      {/* Tiny dot grid, top right corner */}
      <g opacity="0.22" fill="#9d5ff5">
        <circle cx="1080" cy="60" r="2" />
        <circle cx="1110" cy="60" r="2" />
        <circle cx="1140" cy="60" r="2" />
        <circle cx="1080" cy="90" r="2" />
        <circle cx="1110" cy="90" r="2" />
        <circle cx="1140" cy="90" r="2" />
      </g>

      {/* Faint hollow rings */}
      <circle
        cx="70"
        cy="320"
        r="14"
        fill="none"
        stroke="#7c3aed"
        strokeWidth="1"
        opacity="0.18"
      />
      <circle
        cx="1150"
        cy="180"
        r="9"
        fill="none"
        stroke="#9d5ff5"
        strokeWidth="1"
        opacity="0.18"
      />

      {/* Single small code-bracket mark, bottom left */}
      <g
        opacity="0.12"
        stroke="#9d5ff5"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      >
        <path d="M 50 540 L 35 555 L 50 570" />
        <path d="M 85 540 L 100 555 L 85 570" />
      </g>
    </svg>
  );
}
