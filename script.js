// Initialize Lucide icons
window.addEventListener('load', () => {
    lucide.createIcons();
});

// Animation setup
document.addEventListener('DOMContentLoaded', () => {
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
