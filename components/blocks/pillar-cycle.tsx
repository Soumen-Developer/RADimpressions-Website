// components/blocks/pillar-cycle.tsx — the static diamond cycle (HWW-S4 /
// SVCH-S5). No animation — per HWW-S4, animation here reads as decoration.

const nodes = [
  { x: 260, y: 66, label: "STRATEGY" },
  { x: 454, y: 260, label: "BRAND COMMUNICATION" },
  { x: 260, y: 454, label: "MEDIA" },
  { x: 66, y: 260, label: "COMPLETE SUPPORT" },
];

export function PillarCycle() {
  const half = 86;
  return (
    <svg viewBox="0 0 520 520" role="img" aria-label="The four pillars of the practice, connected in a cycle.">
      <path d="M260 52 L468 260 L260 468 L52 260 Z" fill="none" stroke="var(--rule)" strokeWidth="1.5" />
      <path
        d="M260 52 L468 260 M260 468 L468 260 M260 52 L52 260 M260 468 L52 260"
        fill="none"
        stroke="var(--rule-soft)"
        strokeWidth="1"
      />
      {nodes.map((n) => (
        <g key={n.label}>
          <rect x={n.x - half} y={n.y - 18} width={half * 2} height="36" rx="16" fill="var(--bg-page)" stroke="var(--rule)" />
          <text x={n.x} y={n.y + 5} textAnchor="middle" fontSize="12" letterSpacing="1.5" fill="var(--text-primary)" style={{ fontFamily: "var(--font-plex),ui-monospace,monospace" }}>
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}