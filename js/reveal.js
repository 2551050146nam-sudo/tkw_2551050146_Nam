// js/reveal.js

export function initReveal() {
    const items = document.querySelectorAll("[data-reveal]");
    if (items.length === 0) return;
  
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach((el) => {
        el.classList.add("opacity-100", "translate-y-0");
      });
      return;
    }
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-6");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
  
    items.forEach((el) => {
      el.classList.add("transition-all", "duration-700", "opacity-0", "translate-y-6");
      observer.observe(el);
    });
  }