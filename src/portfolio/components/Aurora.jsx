/**
 * Fixed, blurred ambient background: drifting colour orbs, a soft grain and a vignette.
 * Purely decorative and non-interactive.
 */
export default function Aurora() {
  return (
    <div className="aurora" aria-hidden="true">
      <div className="aurora-orb aurora-orb--1" />
      <div className="aurora-orb aurora-orb--2" />
      <div className="aurora-orb aurora-orb--3" />
      <div className="aurora-orb aurora-orb--4" />
      <div className="aurora-grain" />
      <div className="aurora-vignette" />
    </div>
  );
}
