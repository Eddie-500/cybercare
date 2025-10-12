// Fade-in animation using Intersection Observer for better performance
const observeFadeIn = () => {
  const targets = document.querySelectorAll('.fade-in');
  if (!('IntersectionObserver' in window) || targets.length === 0) {
    targets.forEach((el) => el.classList.add('show'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          io.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  targets.forEach((el) => observer.observe(el));
};

// Highlight the active nav link based on the current page path
const highlightActiveNav = () => {
  const current = window.location.pathname.split('/').pop();
  document.querySelectorAll('.navbar nav a').forEach((link) => {
    const href = link.getAttribute('href');
    if (href === current) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
};

window.addEventListener('DOMContentLoaded', () => {
  observeFadeIn();
  highlightActiveNav();
});
