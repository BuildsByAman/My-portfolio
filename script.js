// Initialize Lucide icons
window.addEventListener('load', () => {
    lucide.createIcons();
});

// Animation setup
document.addEventListener('DOMContentLoaded', () => {
    // Animate items on page load
    const animateItems = document.querySelectorAll('.animate-item');
    
    const animations = [];
    animateItems.forEach((item, index) => {
        const animation = item.animate([
            {
                opacity: 0,
                transform: 'translateY(20px)'
            },
            {
                opacity: 1,
                transform: 'translateY(0)'
            }
        ], {
            duration: 500,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            fill: 'forwards',
            delay: 200 + (index * 100)
        });
        
        animations.push(animation);
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert(`Thank you ${name}! Your message has been received. I'll get back to you soon.`);
            
            // Reset the form
            contactForm.reset();
        });
    }

    // Intersection Observer for scroll animations
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
        observer.observe(section);
    });
});

// Tech pill hover effect
const techPills = document.querySelectorAll('.tech-pill');
techPills.forEach(pill => {
    pill.addEventListener('mouseenter', () => {
        pill.style.transform = 'scale(1.05)';
    });
    
    pill.addEventListener('mouseleave', () => {
        pill.style.transform = 'scale(1)';
    });
    
    pill.addEventListener('mousedown', () => {
        pill.style.transform = 'scale(0.95)';
    });
    
    pill.addEventListener('mouseup', () => {
        pill.style.transform = 'scale(1.05)';
    });
});

let lastScrollY = window.scrollY;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    navbar.classList.add("hidden");
  } else {
    navbar.classList.remove("hidden");
  }

  lastScrollY = currentScrollY;
});
// Theme toggling logic
themeToggle.addEventListener("click", (e) => {
    e.preventDefault();
    document.body.classList.toggle("light-theme");
  });
