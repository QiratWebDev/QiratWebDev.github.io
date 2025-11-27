// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// scroll selection active link
let section = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');


window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top => offset && top < offset + height) {
            navlink.forEach(link => {
                links.classlist.remove('active');
                document.querySelector('header nav a[herf*=' + id +'}').classList.add('active');

            });
        };
    });

        
    
// sticky navbar
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scorlly > 100);


// remove toggle icon and navbar when clicl link
menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

};



// scrollreveal
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img, ', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content, ', { origin: 'right' });



// typed js

// const typed = new Typed('.multiple-text', {
//     Strings: ['Web Developer' , 'Digital Markiting', 'Grafic Designer'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
// });
var options = {
      // 1. Target the element ID used in your HTML
      strings: ['Web Developer', 'Digital Marketer', 'Freelancer', ], 
      typeSpeed: 100, // Speed of typing
      backSpeed: 100, // Speed of deleting
      backDelay: 1000,
      loop: true, // Repeat the animation
      // 2. Add 'onComplete' if you want to ensure cleanup, but usually not needed.
    };

    var typed = new Typed('.multiple-text', options);



// Skills section
document.addEventListener('DOMContentLoaded', () => {
    // Circumference for the 45px radius circle
    const circumference = 2 * Math.PI * 45;

    // --- Observer Callback Function ---
    const animateSkills = (entries, observer) => {
        entries.forEach(entry => {
            // Check if the skills section is currently visible
            if (entry.isIntersecting) {
                
                // 1. Animate Horizontal Bars
                const horizontalBars = entry.target.querySelectorAll('.progress-bar-fill');
                horizontalBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    bar.style.width = `${progress}%`;
                });

                // 2. Animate Circular Bars
                const circularBars = entry.target.querySelectorAll('.skill-circle');
                circularBars.forEach(circle => {
                    const progress = circle.getAttribute('data-progress');
                    const offset = circumference - (progress / 100) * circumference;
                    const fill = circle.querySelector('.progress-ring-fill');
                    
                    // Apply the calculated offset to start the fill animation
                    fill.style.strokeDashoffset = offset;
                });

                // Stop observing once the animation has run
                observer.unobserve(entry.target);
            }
        });
    };

    // --- Intersection Observer Setup ---
    const skillsSection = document.getElementById('skills');

    if (skillsSection) {
        const observerOptions = {
            root: null, // relative to the viewport
            rootMargin: '0px',
            threshold: 0.2 // Trigger when 20% of the section is visible
        };

        const observer = new IntersectionObserver(animateSkills, observerOptions);
        observer.observe(skillsSection);
    }
});







