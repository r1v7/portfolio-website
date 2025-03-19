// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Offset for fixed header
                behavior: 'smooth'
            });
        }
    });
});

// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        document.body.classList.toggle('dark-theme');
        
        const isDarkTheme = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = isDarkTheme ? 
            '<i class="fas fa-sun"></i>' : 
            '<i class="fas fa-moon"></i>';
    });
}

// Project filtering
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filterValue = btn.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 300);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(50px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
}

// Animate skill progress circles
const animateSkillProgress = () => {
    const skillCircles = document.querySelectorAll('.skill-progress');
    
    skillCircles.forEach(circle => {
        const progressValue = circle.getAttribute('data-progress');
        const progressRing = circle.querySelector('.progress-ring-circle');
        const circumference = 2 * Math.PI * 50; // 2πr where r=50
        
        progressRing.style.strokeDasharray = `${circumference} ${circumference}`;
        progressRing.style.strokeDashoffset = circumference;
        
        // Set the progress variable for CSS animation
        circle.style.setProperty('--progress', progressValue);
        
        // Add animation class when in viewport
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    circle.classList.add('animate-progress');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(circle);
    });
};

// Fade-in animation for sections
const fadeInElements = () => {
    const elements = document.querySelectorAll('.section-header, .about-card, .project-card, .skill-item, .soft-skill, .contact-info, .contact-form');
    
    elements.forEach((element, index) => {
        element.classList.add('fade-in');
        element.style.transitionDelay = `${index * 0.1}s`;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        observer.observe(element);
    });
};

// Floating animation for hero image
const animateHeroImage = () => {
    const heroImage = document.querySelector('.hero-image .image-container');
    if (heroImage) {
        heroImage.style.animation = 'float 6s ease-in-out infinite';
    }
};

// Add floating animation keyframes to stylesheet
const addFloatingAnimation = () => {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);
};

// Form input animation
const setupFormInputs = () => {
    const formInputs = document.querySelectorAll('.form-input');
    
    formInputs.forEach(input => {
        // Add placeholder attribute to make the label animation work
        input.setAttribute('placeholder', ' ');
        
        // Focus the input when clicking on the label
        const label = input.nextElementSibling;
        if (label && label.classList.contains('form-label')) {
            label.addEventListener('click', () => {
                input.focus();
            });
        }
    });
};

// Initialize all animations and interactions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Set data-text attribute for glitch effect
    const glitchText = document.querySelector('.glitch-text');
    if (glitchText) {
        glitchText.setAttribute('data-text', glitchText.textContent);
    }
    
    // Initialize all functions
    animateSkillProgress();
    fadeInElements();
    animateHeroImage();
    addFloatingAnimation();
    setupFormInputs();
    
    // Typing effect for subtitle
    const typedTextSpan = document.querySelector('.typed-text');
    const cursorSpan = document.querySelector('.cursor');
    
    if (typedTextSpan && cursorSpan) {
        const textArray = ['Web Developer', 'Designer', 'Creator', 'Problem Solver'];
        const typingDelay = 100;
        const erasingDelay = 50;
        const newTextDelay = 2000;
        let textArrayIndex = 0;
        let charIndex = 0;
        
        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove('typing');
                setTimeout(erase, newTextDelay);
            }
        }
        
        function erase() {
            if (charIndex > 0) {
                if(!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove('typing');
                textArrayIndex++;
                if(textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }
        
        if(textArray.length) setTimeout(type, newTextDelay + 250);
    }
});

// Mobile Navigation
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });
}

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject')?.value || '';
        const message = document.getElementById('message').value;
        
        // Here you would typically send the form data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', { name, email, subject, message });
        
        // Show a success message
        const formContainer = contactForm.parentElement;
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
            <i class="fas fa-check-circle"></i>
            <h3>Thank you for your message!</h3>
            <p>I will get back to you soon.</p>
        `;
        successMessage.style.cssText = `
            text-align: center;
            padding: 30px;
            color: var(--accent);
        `;
        
        formContainer.innerHTML = '';
        formContainer.appendChild(successMessage);
    });
}