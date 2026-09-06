import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const run = () => {
      const elements = container.querySelectorAll(".reveal:not(.revealed)");
      if (!elements.length) return;

      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
      );

      elements.forEach(el => observer.observe(el));
      return observer;
    };

    const observer = run();

    // Re-run when DOM changes (handles filtered lists re-rendering)
    const mutObs = new MutationObserver(() => {
      const newEls = container.querySelectorAll(".reveal:not(.revealed)");
      if (!newEls.length) return;
      // Immediately reveal elements already in viewport
      newEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          // small delay so CSS transition fires
          requestAnimationFrame(() => el.classList.add("revealed"));
        } else {
          const obs2 = new IntersectionObserver(
            entries => {
              entries.forEach(e => {
                if (e.isIntersecting) {
                  e.target.classList.add("revealed");
                  obs2.unobserve(e.target);
                }
              });
            },
            { threshold: 0.08 }
          );
          obs2.observe(el);
        }
      });
    });

    mutObs.observe(container, { childList: true, subtree: true });

    return () => {
      observer?.disconnect();
      mutObs.disconnect();
    };
  }, []);

  return ref;
}
