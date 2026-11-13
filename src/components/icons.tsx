/* Minimal inline stroke icons (24×24, currentColor) — no icon dependency. */
type IconProps = { className?: string };

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14M12 5l7 7-7 7" />
  </Svg>
);

export const Check = (p: IconProps) => (
  <Svg {...p}>
    <path d="M20 6 9 17l-5-5" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 12h18M3 6h18M3 18h18" />
  </Svg>
);

export const Close = (p: IconProps) => (
  <Svg {...p}>
    <path d="M18 6 6 18M6 6l12 12" />
  </Svg>
);

export const CalendarCheck = (p: IconProps) => (
  <Svg {...p}>
    <path d="M21 10H3M16 2v4M8 2v4M9 16l2 2 4-4" />
    <rect x="3" y="4" width="18" height="18" rx="2" />
  </Svg>
);

export const Coins = (p: IconProps) => (
  <Svg {...p}>
    <ellipse cx="9" cy="6" rx="6" ry="3" />
    <path d="M3 6v4c0 1.66 2.69 3 6 3s6-1.34 6-3V6" />
    <path d="M3 10v4c0 1.66 2.69 3 6 3 1.1 0 2.12-.15 3-.4" />
    <ellipse cx="17" cy="15" rx="4" ry="2" />
    <path d="M13 15v3c0 1.1 1.79 2 4 2s4-.9 4-2v-3" />
  </Svg>
);

export const Building = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 21h18M5 21V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v16M15 9h4a2 2 0 0 1 2 2v10" />
    <path d="M9 7h2M9 11h2M9 15h2" />
  </Svg>
);

export const Leaf = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14Zm0 0 7-7" />
  </Svg>
);
