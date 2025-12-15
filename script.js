// script.js
        // Progress Bar
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            document.getElementById('progressBar').style.width = scrolled + '%';
        });

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const navMenu = document.getElementById('navMenu');
        
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('#navMenu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });

        // Intersection Observer for Animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        // Observe elements
        document.querySelectorAll('.section-title, .about-content, .tool-card, .project-card, .timeline-item, .contact-form, .contact-info').forEach(el => {
            observer.observe(el);
        });

        // Stagger animation for tool cards
        const toolCards = document.querySelectorAll('.tool-card');
        toolCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.1}s`;
        });

        // Stagger animation for project cards
        const projectCards = document.querySelectorAll('.project-card');
        projectCards.forEach((card, index) => {
            card.style.transitionDelay = `${index * 0.15}s`;
        });

        // Project Filter
        const filterBtns = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.getAttribute('data-filter');

                projects.forEach(project => {
                    project.classList.remove('visible');
                    
                    setTimeout(() => {
                        if(filter === 'all' || project.getAttribute('data-category') === filter) {
                            project.style.display = 'block';
                            setTimeout(() => project.classList.add('visible'), 10);
                        } else {
                            project.style.display = 'none';
                        }
                    }, 300);
                });
            });
        });

        // Form Submission
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            
            const btn = e.target.querySelector('.submit-btn');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.style.background = 'var(--secondary)';
            
            setTimeout(() => {
                btn.textContent = '✓ Message Sent!';
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    e.target.reset();
                }, 2500);
            }, 1500);
        });

        // Parallax Effect for Hero
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const hero = document.querySelector('.hero-content');
            if(hero && scrolled < 800) {
                hero.style.transform = `translateY(${scrolled * 0.4}px)`;
                hero.style.opacity = 1 - (scrolled / 600);
            }
        });

        // Scroll indicator click
        document.querySelector('.scroll-indicator').addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({ behavior: 'smooth' });
        });

        // Add stagger delays to expertise tags
        document.querySelectorAll('.tag-icon').forEach((icon, index) => {
            icon.style.animationDelay = `${index * 0.2}s`;
        });
        // Smooth Scrolling for Button Clicks (Optional)
document.querySelectorAll('.scroll-to-section').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});
