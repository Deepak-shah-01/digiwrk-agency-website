
        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    // Close mobile menu if open
                    mobileMenu.classList.add('hidden');
                }
            });
        });
        
        // Contact form submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const business = document.getElementById('business').value;
            const phone = document.getElementById('phone').value;
            const requirement = document.getElementById('requirement').value;
            
            // Create WhatsApp message
            const message = `Hi! I'm ${name} from ${business}. 
Phone: ${phone}
Requirement: ${requirement}
            
I'm interested in your digital marketing services.`;
            
            const whatsappUrl = `https://wa.me/918085408101?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            
            // Show success message
            alert('Thank you! Redirecting to WhatsApp...');
            
            // Reset form
            this.reset();
        });
        
        // Scroll to contact function
        function scrollToContact() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        
        // Add scroll effect to navbar
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('nav');
            if (window.scrollY > 100) {
                navbar.classList.add('bg-black');
                navbar.classList.remove('bg-black/90');
            } else {
                navbar.classList.add('bg-black/90');
                navbar.classList.remove('bg-black');
            }
        });
        
        // Create advanced floating particles
        function createFloatingParticles() {
            const particleContainer = document.getElementById('particles-container');
            
            // Create different types of particles
            const particleTypes = [
                { size: 2, color: 'bg-blue-400', glow: 'shadow-blue-400/50' },
                { size: 3, color: 'bg-purple-400', glow: 'shadow-purple-400/50' },
                { size: 1, color: 'bg-pink-400', glow: 'shadow-pink-400/50' },
                { size: 4, color: 'bg-cyan-400', glow: 'shadow-cyan-400/50' }
            ];
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                const type = particleTypes[Math.floor(Math.random() * particleTypes.length)];
                
                particle.className = `particle absolute ${type.color} rounded-full opacity-60`;
                particle.style.width = type.size + 'px';
                particle.style.height = type.size + 'px';
                particle.style.left = Math.random() * 100 + '%';
                particle.style.boxShadow = `0 0 ${type.size * 3}px currentColor`;
                particle.style.animationDelay = Math.random() * 15 + 's';
                particle.style.animationDuration = (10 + Math.random() * 10) + 's';
                
                particleContainer.appendChild(particle);
            }
        }
        
        // Create holographic interface elements
        function createHolographicElements() {
            const holoContainer = document.createElement('div');
            holoContainer.className = 'fixed inset-0 pointer-events-none z-0';
            holoContainer.id = 'holo-container';
            document.body.appendChild(holoContainer);
            
            // Create scanning lines
            const scanLine = document.createElement('div');
            scanLine.className = 'absolute w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-30';
            scanLine.style.animation = 'scanLine 8s linear infinite';
            holoContainer.appendChild(scanLine);
            
            // Add scan line animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes scanLine {
                    0% { top: -2px; }
                    100% { top: 100vh; }
                }
            `;
            document.head.appendChild(style);
        }
        
        // Create 3D background elements
        function create3DBackground() {
            const bgContainer = document.createElement('div');
            bgContainer.className = 'fixed inset-0 pointer-events-none z-0 overflow-hidden';
            bgContainer.id = 'bg-3d-container';
            document.body.appendChild(bgContainer);
            
            // Create rotating cubes in background
            for (let i = 0; i < 5; i++) {
                const cube = document.createElement('div');
                cube.className = 'absolute opacity-5';
                cube.style.left = Math.random() * 100 + '%';
                cube.style.top = Math.random() * 100 + '%';
                cube.innerHTML = `
                    <div class="cube-3d" style="width: ${50 + Math.random() * 50}px; height: ${50 + Math.random() * 50}px; animation-duration: ${15 + Math.random() * 10}s;">
                        <div class="cube-face front"></div>
                        <div class="cube-face back"></div>
                        <div class="cube-face right"></div>
                        <div class="cube-face left"></div>
                        <div class="cube-face top"></div>
                        <div class="cube-face bottom"></div>
                    </div>
                `;
                bgContainer.appendChild(cube);
            }
        }
        
        // Parallax 3D effect on scroll
        function handle3DParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-3d');
            
            parallaxElements.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                const yPos = -(scrolled * speed);
                const rotateY = scrolled * 0.05;
                element.style.transform = `translate3d(0, ${yPos}px, 0) rotateY(${rotateY}deg)`;
            });
        }
        
        // Mouse movement 3D effect
        function handleMouseMove3D(e) {
            const cards = document.querySelectorAll('.card-3d');
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;
            
            cards.forEach((card, index) => {
                const rect = card.getBoundingClientRect();
                const cardCenterX = rect.left + rect.width / 2;
                const cardCenterY = rect.top + rect.height / 2;
                
                const deltaX = (e.clientX - cardCenterX) / rect.width;
                const deltaY = (e.clientY - cardCenterY) / rect.height;
                
                if (Math.abs(deltaX) < 1 && Math.abs(deltaY) < 1) {
                    const rotateY = deltaX * 10;
                    const rotateX = -deltaY * 10;
                    card.style.transform = `perspective(1000px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateZ(10px)`;
                }
            });
        }
        
        // Initialize futuristic effects
        document.addEventListener('DOMContentLoaded', () => {
            createFloatingParticles();
            createHolographicElements();
            
            // Initialize typing animation
            setTimeout(() => {
                const typingElement = document.querySelector('.typing-animation');
                if (typingElement) {
                    typingElement.style.width = '100%';
                }
            }, 1000);
            
            // Add mouse trail effect
            let mouseTrail = [];
            document.addEventListener('mousemove', (e) => {
                mouseTrail.push({ x: e.clientX, y: e.clientY, time: Date.now() });
                
                // Limit trail length
                if (mouseTrail.length > 10) {
                    mouseTrail.shift();
                }
                
                // Create trail particles
                if (Math.random() < 0.3) {
                    const trail = document.createElement('div');
                    trail.className = 'fixed w-1 h-1 bg-blue-400 rounded-full pointer-events-none z-50 opacity-70';
                    trail.style.left = e.clientX + 'px';
                    trail.style.top = e.clientY + 'px';
                    trail.style.animation = 'fadeOut 1s ease-out forwards';
                    document.body.appendChild(trail);
                    
                    setTimeout(() => trail.remove(), 1000);
                }
            });
            
            // Add fade out animation for mouse trail
            const trailStyle = document.createElement('style');
            trailStyle.textContent = `
                @keyframes fadeOut {
                    0% { opacity: 0.7; transform: scale(1); }
                    100% { opacity: 0; transform: scale(0); }
                }
            `;
            document.head.appendChild(trailStyle);
        });
        
        // Add event listeners
        window.addEventListener('scroll', handle3DParallax);
        document.addEventListener('mousemove', handleMouseMove3D);
        
        // Reset card transforms when mouse leaves
        document.addEventListener('mouseleave', () => {
            document.querySelectorAll('.card-3d').forEach(card => {
                card.style.transform = '';
            });
        });
        
        // Animate elements on scroll with 3D effects
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0) rotateX(0deg)';
                }
            });
        }, observerOptions);
        
        // Observe all sections with 3D transforms
        document.querySelectorAll('section').forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px) rotateX(10deg)';
            section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(section);
        });
    (function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'97de397035ef85bf',t:'MTc1NzY2NzczMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();
