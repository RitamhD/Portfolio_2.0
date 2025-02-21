// Landing page
document.getElementById('start').addEventListener('click', function () {
    this.classList.add('start_clicked'); // Trigger the animation
    this.innerHTML = ''; // Clear the button text
});

// Listen for the animation end event
document.getElementById('start').addEventListener('animationend', function () {
    const landingPage = document.getElementById('landingPage');
    
    // Once the animation ends, hide & remove the landing page
    landingPage.style.display = 'none';
    document.querySelector('body').style.background = 'none'
    landingPage.remove();
    
    // Now show the content
    const content = document.getElementById('content');
    content.style.display = 'block';
    document.body.style.backgroundColor = 'rgb(20, 19, 19)';
});

//Navbar:-
let navbarButtons = document.querySelectorAll('.nav_bar a');
for(var i=0; i<navbarButtons.length; i++){
        navbarButtons[i].addEventListener("mouseenter", function(){   
        this.classList.add("a_hover");
    });
        navbarButtons[i].addEventListener("mouseout", function(){
        this.classList.remove("a_hover");
    });
}

document.querySelectorAll('nav#navbar a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId); // Get the target section element

        targetSection.scrollIntoView({
            behavior: 'smooth', // Smooth scroll
            block: 'start' // Scroll to the top of the section
        });
    });
});

document.getElementById('contact').addEventListener('click', function() {
    const targetSection = document.getElementById('footer'); // Target the section you want to scroll to
    targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scroll
        block: 'start' // Scroll to the top of the section
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Select the specific sections for animation
    const sectionsToAnimate = document.querySelectorAll('#technologies, #projects');

    // Create an IntersectionObserver to observe when the sections come into view
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible'); // Add visible class when section is in view
                observer.unobserve(entry.target); // Stop observing once section is visible
            }
        });
    }, {
        threshold: 0.1 // Trigger when 10% of the section is visible
    });

    // Start observing the sections
    sectionsToAnimate.forEach(section => {
        observer.observe(section);
    });
});
