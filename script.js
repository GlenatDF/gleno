// ============================================================
// Scroll reveal — fades elements in as they enter the viewport
// ============================================================
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

// ============================================================
// Nav active link — highlights the current section in the nav
// ============================================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => navObserver.observe(section));

// ============================================================
// Nav shadow on scroll
// ============================================================
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.style.borderBottomColor = window.scrollY > 10
    ? 'rgba(42, 64, 96, 0.6)'
    : 'var(--border)';
}, { passive: true });
