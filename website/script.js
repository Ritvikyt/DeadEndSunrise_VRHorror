// Particle system
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2-8px
        const size = Math.random() * 6 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random starting position
        particle.style.left = `${Math.random() * 100}%`;

        // Random animation delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        // Random animation duration
        particle.style.animationDuration = `${Math.random() * 10 + 10}s`;

        particlesContainer.appendChild(particle);
    }
}

// Smooth scroll for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Download button feedback
const downloadBtn = document.querySelector('.download-btn');
if (downloadBtn) {
    downloadBtn.addEventListener('click', function () {
        console.log('Download initiated for DeadEnd Sunrise VR Horror');

        // Visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 200);
    });
}

// Random glitch effect on title
function randomGlitch() {
    const glitchElements = document.querySelectorAll('.glitch');
    glitchElements.forEach(element => {
        if (Math.random() < 0.1) { // 10% chance
            element.style.animation = 'none';
            setTimeout(() => {
                element.style.animation = '';
            }, 100);
        }
    });
}

// Parallax effect on scroll
let scrollPosition = 0;
window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    // Parallax for hero visual elements
    const floatingEye = document.querySelector('.floating-eye');
    const ghost = document.querySelector('.ghost');

    if (floatingEye) {
        floatingEye.style.transform = `translateY(${scrollPosition * 0.1}px) rotate(${scrollPosition * 0.05}deg)`;
    }

    if (ghost) {
        ghost.style.transform = `translateY(${scrollPosition * 0.15}px) translateX(${scrollPosition * 0.05}px)`;
    }
});

// Developer card hover effects
const devCards = document.querySelectorAll('.dev-card');
devCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        // Intensify glow on hover
        const avatar = this.querySelector('.avatar-glow');
        if (avatar) {
            avatar.style.animation = 'glow-pulse 1s ease-in-out infinite';
        }
    });

    card.addEventListener('mouseleave', function () {
        // Reset glow animation
        const avatar = this.querySelector('.avatar-glow');
        if (avatar) {
            avatar.style.animation = 'glow-pulse 2s ease-in-out infinite';
        }
    });
});

// Feature card hover intensity
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.borderColor = '#ff0000';
        this.style.boxShadow = '0 0 60px rgba(255, 0, 0, 0.8), inset 0 0 20px rgba(139, 0, 0, 0.3)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.borderColor = 'var(--blood-red)';
        this.style.boxShadow = '0 0 40px rgba(139, 0, 0, 0.6)';
    });
});

// Blood drip animation trigger
function createBloodDrips() {
    const vrScene = document.querySelector('.vr-scene');
    if (!vrScene) return;

    setInterval(() => {
        const drip = document.createElement('div');
        drip.className = 'blood-drip';
        drip.style.left = `${Math.random() * 100}%`;
        drip.style.animationDelay = '0s';
        vrScene.appendChild(drip);

        // Remove drip after animation completes
        setTimeout(() => {
            drip.remove();
        }, 3000);
    }, 5000); // New drip every 5 seconds
}

// Headset pulse timing
const headset = document.querySelector('.headset');
if (headset) {
    setInterval(() => {
        headset.style.filter = 'drop-shadow(0 0 40px var(--blood-red))';
        setTimeout(() => {
            headset.style.filter = 'drop-shadow(0 0 20px var(--blood-red))';
        }, 500);
    }, 3000);
}

// Footer link glow on hover
const footerLinks = document.querySelectorAll('.footer-link');
footerLinks.forEach(link => {
    link.addEventListener('mouseenter', function () {
        this.style.textShadow = '0 0 20px var(--blood-red), 0 0 40px var(--blood-red)';
    });

    link.addEventListener('mouseleave', function () {
        this.style.textShadow = '0 0 10px var(--blood-red)';
    });
});

// Initialize on page load
window.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createBloodDrips();

    // Random glitch effect every few seconds
    setInterval(randomGlitch, 3000);

    // Console easter egg
    console.log('%c⚠️ WARNING ⚠️', 'color: #8b0000; font-size: 24px; font-weight: bold;');
    console.log('%cYou are about to enter DeadEnd Sunrise...', 'color: #e8dcc4; font-size: 16px;');
    console.log('%cThe nightmare begins when you put on the headset.', 'color: #8b0000; font-size: 14px;');
    console.log('%c👁️ They are watching... 👁️', 'color: #8b0000; font-size: 18px;');
});

// Screen flicker on random intervals
function screenFlicker() {
    if (Math.random() < 0.05) { // 5% chance
        document.body.style.animation = 'none';
        document.body.style.opacity = '0.8';
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 50);
        setTimeout(() => {
            document.body.style.opacity = '0.9';
        }, 100);
        setTimeout(() => {
            document.body.style.opacity = '1';
        }, 150);
    }
}

setInterval(screenFlicker, 5000);

// Cursor trail effect (blood trail)
let lastX = 0;
let lastY = 0;
document.addEventListener('mousemove', (e) => {
    if (Math.random() < 0.05) { // Occasional blood particle on cursor move
        const trail = document.createElement('div');
        trail.style.position = 'fixed';
        trail.style.left = e.clientX + 'px';
        trail.style.top = e.clientY + 'px';
        trail.style.width = '4px';
        trail.style.height = '4px';
        trail.style.background = 'var(--blood-red)';
        trail.style.borderRadius = '50%';
        trail.style.pointerEvents = 'none';
        trail.style.zIndex = '9998';
        trail.style.opacity = '0.6';
        trail.style.transition = 'opacity 1s, transform 1s';
        document.body.appendChild(trail);

        setTimeout(() => {
            trail.style.opacity = '0';
            trail.style.transform = 'translateY(20px)';
        }, 100);

        setTimeout(() => {
            trail.remove();
        }, 1100);
    }
});
