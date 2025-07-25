document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  
  mobileMenuToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    this.classList.toggle('active');
  });

  // Dark Mode Toggle
  const darkModeToggle = document.querySelector('.dark-mode-toggle');
  
  darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
    } else {
      localStorage.setItem('darkMode', 'disabled');
    }
  });

  // Check for saved dark mode preference
  if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
  }

  // Page Navigation
  const teenPageLink = document.querySelector('a[href="#teen-page"]');
  const companyPageLink = document.querySelector('a[href="#company-page"]');
  const teenPage = document.getElementById('teen-page');
  const companyPage = document.getElementById('company-page');
  
  // Show teen page by default
  teenPage.classList.remove('hidden');
  companyPage.classList.add('hidden');
  
  teenPageLink.addEventListener('click', function(e) {
    e.preventDefault();
    teenPage.classList.remove('hidden');
    companyPage.classList.add('hidden');
    
    // Update active link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });
  
  companyPageLink.addEventListener('click', function(e) {
    e.preventDefault();
    companyPage.classList.remove('hidden');
    teenPage.classList.add('hidden');
    
    // Update active link
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.classList.remove('active');
    });
    this.classList.add('active');
  });

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      if (this.getAttribute('href') === '#teen-page' || 
          this.getAttribute('href') === '#company-page') {
        return; // Let the page navigation handle these
      }
      
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Card hover effects
  document.querySelectorAll('.card, .opportunity-card, .benefit-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-5px)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Button hover effects
  document.querySelectorAll('.cta-button, .download-app').forEach(button => {
    button.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });
    
    button.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
    });
  });

  // Form submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }
});

// Simple animations on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
    navbar.style.padding = '0.5rem 0';
  } else {
    navbar.style.boxShadow = 'none';
    navbar.style.padding = '1rem 0';
  }
});