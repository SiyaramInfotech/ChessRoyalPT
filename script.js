document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS (Animate on Scroll)
    AOS.init({
        duration: 1000,
        once: true
    });

    // GSAP Animations
    // Animate header title
    gsap.from('header h1', {
        opacity: 0, 
        y: -50, 
        duration: 1, 
        ease: 'power3.out'
    });

    // Animate CTA buttons
    gsap.from('.cta-buttons .btn', {
        opacity: 0, 
        scale: 0.5, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'back.out(1.7)'
    });

    // Parallax effect on game image
    const gameImage = document.querySelector('.game-image img');
    window.addEventListener('mousemove', (e) => {
        const x = (e.clientX * -1 / 50);
        const y = (e.clientY * -1 / 50);
        
        gsap.to(gameImage, {
            transform: `translate(${x}px, ${y}px)`,
            duration: 0.5
        });
    });

    // Interactive hover effects for features
    const features = document.querySelectorAll('.feature');
    features.forEach(feature => {
        feature.addEventListener('mouseenter', () => {
            gsap.to(feature, {
                scale: 1.05, 
                boxShadow: '0 10px 20px rgba(0,0,0,0.2)', 
                duration: 0.3
            });
        });
        
        feature.addEventListener('mouseleave', () => {
            gsap.to(feature, {
                scale: 1, 
                boxShadow: '0 4px 6px rgba(0,0,0,0.1)', 
                duration: 0.3
            });
        });
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a.nav-link[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Bootstrap-compatible smooth scrolling
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Feature card hover animations
    const featureCards = document.querySelectorAll('.card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('shadow-lg');
        });

        card.addEventListener('mouseleave', () => {
            card.classList.remove('shadow-lg');
        });
    });

    // Newsletter modal (example of Bootstrap modal interaction)
    const newsletterModal = new bootstrap.Modal(document.getElementById('newsletterModal'), {
        keyboard: false
    });

    const newsletterTrigger = document.getElementById('newsletterTrigger');
    if (newsletterTrigger) {
        newsletterTrigger.addEventListener('click', () => {
            newsletterModal.show();
        });
    }

    // Form validation example
    const forms = document.querySelectorAll('.needs-validation');
    forms.forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }
            form.classList.add('was-validated');
        }, false);
    });

    // Responsive navbar toggle tracking
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');
    
    if (navbarToggler && navbarCollapse) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }

    // Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});
