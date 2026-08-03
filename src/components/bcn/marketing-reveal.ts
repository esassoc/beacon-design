// Shared scroll-reveal controller for the marketing homepage sections.
// setupX shape: owns the behavior for every [data-reveal] element on the page.
// Elements start translated+transparent (CSS in the components) and gain
// .is-visible once they enter the viewport; browsers without IO just show
// everything. Idempotent — safe to call from every component that needs it
// (Astro dedupes the module, and observed elements are marked).

export function setupMarketingReveal(): void {
  const reveals = document.querySelectorAll<HTMLElement>('[data-reveal]:not([data-reveal-bound])');
  if (!reveals.length) return;

  if (!('IntersectionObserver' in window)) {
    reveals.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' },
  );

  reveals.forEach((el) => {
    el.setAttribute('data-reveal-bound', '');
    observer.observe(el);
  });
}
