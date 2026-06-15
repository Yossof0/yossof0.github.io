import { useCursor } from "../hooks/useCursor";

export default function Cursor() {
  const { pos, dot, clicking, hovering } = useCursor();

  return (
    <>
      <div
        className={`cursor-ring ${hovering ? "hovering" : ""} ${clicking ? "clicking" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className="cursor-dot"
        style={{ left: dot.x, top: dot.y }}
      />
    </>
  );
}
