// Lightweight scroll animations using IntersectionObserver.
// Observes all <section> elements and adds the `in-view` class when visible.
export function initScrollAnimations() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      const el = entry.target;
      if (entry.isIntersecting) {
        el.classList.add('in-view');
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.08 });

  function observeAll() {
    document.querySelectorAll('section').forEach((el) => {
      if (!el.classList.contains('scroll-animate')) {
        el.classList.add('scroll-animate');
      }

      // Add simple per-child stagger classes to make content appear more lively.
      // Only assign once per section.
      if (!el.__staggerAssigned) {
        Array.from(el.children).slice(0, 6).forEach((child, i) => {
          child.classList.add(`stagger-${Math.min(i,5)}`);
        });
        el.__staggerAssigned = true;
      }

      if (!el.__scrollObserved) {
        observer.observe(el);
        el.__scrollObserved = true;
      }
    });
  }

  // Initial run
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeAll, { once: true });
  } else {
    observeAll();
  }

  // Watch for new sections added by client-side routing or dynamic content
  const mo = new MutationObserver(() => observeAll());
  mo.observe(document.body, { childList: true, subtree: true });
}

export default initScrollAnimations;
