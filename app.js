// Wait for DOM to load
document.addEventListener('DOMContentLoaded', () => {
    // Add visible class to hero section immediately
    document.querySelector('.hero-content').classList.add('visible');
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetSection.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });
    
    // Reveal sections on scroll
    const revealSections = entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    };
    
    const sectionObserver = new IntersectionObserver(revealSections, {
        root: null,
        threshold: 0.15,
    });
    
    document.querySelectorAll('section').forEach(section => {
        sectionObserver.observe(section);
    });
    
    // Header transparency effect
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
            header.style.boxShadow = '0 1px 10px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0)';
            header.style.boxShadow = 'none';
        }
    });
    
    // Subtle parallax effect for research images
    window.addEventListener('scroll', () => {
        const researchImages = document.querySelectorAll('.research-image');
        
        researchImages.forEach(image => {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const imagePosition = image.getBoundingClientRect().top + scrollPosition;
            
            if (scrollPosition + windowHeight > imagePosition && 
                scrollPosition < imagePosition + windowHeight) {
                const parallaxValue = (scrollPosition + windowHeight - imagePosition) * 0.05;
                image.style.transform = `translateY(${parallaxValue}px)`;
            }
        });
    });
    
    // Add hover effect to research items
    const researchItems = document.querySelectorAll('.research-item');
    
    researchItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const heading = item.querySelector('h3');
            heading.style.color = '#0066cc';
            heading.style.transition = 'color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            const heading = item.querySelector('h3');
            heading.style.color = '#1d1d1f';
        });
    });
    
    // Add hover effect to project items
    const projectItems = document.querySelectorAll('.project-item');
    
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            const heading = item.querySelector('h3');
            heading.style.color = '#0066cc';
            heading.style.transition = 'color 0.3s ease';
        });
        
        item.addEventListener('mouseleave', () => {
            const heading = item.querySelector('h3');
            heading.style.color = '#1d1d1f';
        });
    });

    // Dark mode toggle
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener('change', () => {
        document.body.classList.toggle('dark-mode');
    });
});
