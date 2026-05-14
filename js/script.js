// Fade-in on scroll
const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('show');
      observer.unobserve(el.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

faders.forEach(el => observer.observe(el));

// Portfolio filter buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

