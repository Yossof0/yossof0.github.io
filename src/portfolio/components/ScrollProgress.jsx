import { useEffect, useRef } from "react";

/** Thin scroll indicator on the page edge; shows while scrolling, fades out after a pause. */
export default function ScrollProgress() {
  const barRef = useRef(null);
  const thumbRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    const thumb = thumbRef.current;
    if (!bar || !thumb) return;

    let frame = 0;
    let hideTimer = 0;

    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      thumb.style.transform = `scaleY(${progress})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
      bar.classList.remove("hidden");
      clearTimeout(hideTimer);
      hideTimer = window.setTimeout(() => bar.classList.add("hidden"), 1200);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="scroll-progress hidden" ref={barRef}>
      <div className="scroll-progress-track" />
      <div className="scroll-progress-thumb" ref={thumbRef} />
    </div>
  );
}
