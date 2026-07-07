import './style.css'

document.addEventListener('DOMContentLoaded', () => {
  // Navbar scroll effect
  const navbar = document.querySelector('.premium-nav');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      // Add slight background to nav when scrolling past hero
      if (window.scrollY > window.innerHeight - 100) {
        navbar.style.background = 'rgba(5, 5, 5, 0.9)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
      } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
      }
    } else {
      navbar.classList.remove('scrolled');
      navbar.style.background = 'transparent';
      navbar.style.backdropFilter = 'none';
      navbar.style.borderBottom = 'none';
    }
  });

  // Intersection Observer for scroll animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        // Unobserve after showing
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all fade-in-section elements
  const elements = document.querySelectorAll('.fade-in-section');
  elements.forEach(el => {
    observer.observe(el);
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
});
