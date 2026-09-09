import { useEffect, useRef } from "react";

export function useScrollReveal() {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const observe = () => {
      const els = container.querySelectorAll(".reveal:not(.revealed)");
      if (!els.length) return;

      const io = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add("revealed");
              io.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
      );

      els.forEach(el => io.observe(el));
      return io;
    };

    let io = observe();

    // Watch for new elements (re-renders from filtering etc)
    const mo = new MutationObserver(() => {
      const newEls = container.querySelectorAll(".reveal:not(.revealed)");
      newEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        const inView = rect.top < window.innerHeight - 20 && rect.bottom > 0;
        if (inView) {
          requestAnimationFrame(() => el.classList.add("revealed"));
        } else {
          const io2 = new IntersectionObserver(
            entries => {
              entries.forEach(e => {
                if (e.isIntersecting) {
                  e.target.classList.add("revealed");
                  io2.unobserve(e.target);
                }
              });
            },
            { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
          );
          io2.observe(el);
        }
      });
    });

    mo.observe(container, { childList: true, subtree: true });

    return () => {
      io?.disconnect();
      mo.disconnect();
    };
  }, []);

  return ref;
}
