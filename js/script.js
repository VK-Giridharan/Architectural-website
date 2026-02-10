/* ============================================
   ARCHITECTURE WEBSITE - MAIN JAVASCRIPT
   Basic interactions and functionality
   ============================================ */

// Console log on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('Architecture Website - Page Loaded Successfully');
  
  // Initialize any page-specific functionality
  initPage();
});

// Initialize page-specific features
function initPage() {
  // Simple button interaction example
  const ctaButtons = document.querySelectorAll('.btn');
  
  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      // If button is a link, allow default behavior
      if (this.tagName === 'A' || this.closest('a')) {
        return;
      }
      
      // Otherwise, show alert for demo purposes
      console.log('Button clicked:', this.textContent);
    });
  });
  
  // Form validation for contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
      
      // Basic validation
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
      
      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }
      
      // Success message (in real app, this would submit to server)
      alert('Thank you for your message! We will get back to you soon.');
      contactForm.reset();
    });
  }
  
  // Smooth scroll for anchor links
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
}

// Mobile menu toggle (if needed in future)
function toggleMobileMenu() {
  const nav = document.querySelector('nav ul');
  if (nav) {
    nav.classList.toggle('mobile-open');
  }
}
