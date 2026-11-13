import { useEffect, useRef } from "react";

/**
 * Adds `.revealed` to every `.reveal` element inside the returned ref once it scrolls into view.
 * One IntersectionObserver is shared; elements added later (filters, language switch) are picked up too.
 */
export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            io.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -20px 0px" },
    );

    const observeNew = () => {
      container.querySelectorAll(".reveal:not(.revealed)").forEach((el) => io.observe(el));
    };
    observeNew();

    const mo = new MutationObserver(observeNew);
    mo.observe(container, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return ref;
}
