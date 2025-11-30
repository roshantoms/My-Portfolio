// Mobile Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Certifications Carousel
const certTrack = document.getElementById('certificationsTrack');
const certPrev = document.getElementById('certPrev');
const certNext = document.getElementById('certNext');

certPrev.addEventListener('click', () => {
    certTrack.scrollBy({ left: -330, behavior: 'smooth' });
});

certNext.addEventListener('click', () => {
    certTrack.scrollBy({ left: 330, behavior: 'smooth' });
});

// Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    contactForm.reset();
});

// Set Current Year in Footer
document.getElementById('currentYear').textContent = new Date().getFullYear();

// Header Scroll Effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.05)';
    }
});