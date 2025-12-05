// ===========================
// Mobile Menu Toggle
// ===========================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');

    // Animate hamburger icon
    const spans = mobileMenuToggle.querySelectorAll('span');
    if (mobileMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translateY(8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translateY(-8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking on a link
mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ===========================
// Smooth Scrolling
// ===========================
const navLinks = document.querySelectorAll('a[href^="#"]');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');

        // Only prevent default if it's not just "#"
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);

            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// ===========================
// Footer Year Update
// ===========================
const currentYearElement = document.getElementById('currentYear');
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// ===========================
// Add Scroll Animation
// ===========================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe all course cards, blog cards, and sections
const animatedElements = document.querySelectorAll('.course-card, .blog-card, .contact-info, .enrollment-form');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===========================
// Header Background on Scroll
// ===========================
const header = document.querySelector('.header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        header.style.background = 'rgba(10, 14, 26, 0.95)';
        header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.background = 'rgba(10, 14, 26, 0.8)';
        header.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===========================
// Scroll to Top Button
// ===========================
const scrollToTopBtn = document.getElementById('scrollToTop');

// Show/hide button based on scroll position
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }
});

// Scroll to top when button is clicked
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===========================
// Add Hover Effect to Course Cards
// ===========================
const courseCards = document.querySelectorAll('.course-card');

courseCards.forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transition = 'all 0.3s ease';
    });

    card.addEventListener('mousemove', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;

        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ===========================
// Initialize on Load
// ===========================
window.addEventListener('load', () => {
    // Add fade-in effect to hero section
    const heroContent = document.querySelector('.hero-content');
    const heroImage = document.querySelector('.hero-image');

    if (heroContent) {
        heroContent.style.opacity = '0';
        heroContent.style.transform = 'translateY(30px)';

        setTimeout(() => {
            heroContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroContent.style.opacity = '1';
            heroContent.style.transform = 'translateY(0)';
        }, 100);
    }

    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'translateX(30px)';

        setTimeout(() => {
            heroImage.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'translateX(0)';
        }, 300);
    }
});

// ===========================
// Bank Transfer Toggle
// ===========================
const bankTransferBtn = document.getElementById('bankTransferBtn');
const bankDetails = document.getElementById('bankDetails');

if (bankTransferBtn && bankDetails) {
    bankTransferBtn.addEventListener('click', () => {
        if (bankDetails.style.display === 'none' || bankDetails.style.display === '') {
            bankDetails.style.display = 'block';
            bankDetails.style.animation = 'fadeIn 0.3s ease';
        } else {
            bankDetails.style.display = 'none';
        }
    });
}

// ===========================
// Feature Pills Toggle
// ===========================
const flexiblePaymentsPill = document.getElementById('flexiblePaymentsPill');
const certifiedInstructorsPill = document.getElementById('certifiedInstructorsPill');
const weekendBatchesPill = document.getElementById('weekendBatchesPill');

const flexiblePaymentsDetails = document.getElementById('flexiblePaymentsDetails');
const certifiedInstructorsDetails = document.getElementById('certifiedInstructorsDetails');
const weekendBatchesDetails = document.getElementById('weekendBatchesDetails');

// Function to hide all feature details
function hideAllFeatureDetails() {
    if (flexiblePaymentsDetails) flexiblePaymentsDetails.style.display = 'none';
    if (certifiedInstructorsDetails) certifiedInstructorsDetails.style.display = 'none';
    if (weekendBatchesDetails) weekendBatchesDetails.style.display = 'none';
}

// Toggle Flexible Payments
if (flexiblePaymentsPill && flexiblePaymentsDetails) {
    flexiblePaymentsPill.addEventListener('click', () => {
        const isVisible = flexiblePaymentsDetails.style.display === 'block';
        hideAllFeatureDetails();
        if (!isVisible) {
            flexiblePaymentsDetails.style.display = 'block';
        }
    });
}

// Toggle Certified Instructors
if (certifiedInstructorsPill && certifiedInstructorsDetails) {
    certifiedInstructorsPill.addEventListener('click', () => {
        const isVisible = certifiedInstructorsDetails.style.display === 'block';
        hideAllFeatureDetails();
        if (!isVisible) {
            certifiedInstructorsDetails.style.display = 'block';
        }
    });
}

// Toggle Weekend Batches
if (weekendBatchesPill && weekendBatchesDetails) {
    weekendBatchesPill.addEventListener('click', () => {
        const isVisible = weekendBatchesDetails.style.display === 'block';
        hideAllFeatureDetails();
        if (!isVisible) {
            weekendBatchesDetails.style.display = 'block';
        }
    });
}
