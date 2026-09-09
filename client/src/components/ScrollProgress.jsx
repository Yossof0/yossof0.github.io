import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const thumbRef = useRef(null);
  const barRef = useRef(null);
  let hideTimer = null;

  useEffect(() => {
    const thumb = thumbRef.current;
    const bar = barRef.current;
    if (!thumb || !bar) return;

    // GSAP scroll-linked height animation
    const tween = gsap.to(thumb, {
      height: "100%",
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.3,
        onUpdate: () => {
          // Show bar while scrolling, fade after pause
          bar.classList.remove("hidden");
          clearTimeout(hideTimer);
          hideTimer = setTimeout(() => {
            bar.classList.add("hidden");
          }, 1200);
        },
      },
    });

    // Start hidden
    bar.classList.add("hidden");

    return () => {
      tween.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <div className="scroll-progress hidden" ref={barRef}>
      <div className="scroll-progress-track" />
      <div className="scroll-progress-thumb" ref={thumbRef} />
    </div>
  );
}
