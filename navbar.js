// Smooth scrolling to sections
const links = document.querySelectorAll('nav ul li a');

links.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Get the target class from the href attribute
        const targetClass = this.getAttribute('href');

        // Get the target element using the class
        const targetElement = document.querySelector(targetClass);

        // Check if the target element exists
        if (targetElement) {
            // Smooth scroll to the target element
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Get references to the hamburger button and the navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add event listener to the hamburger button
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show'); // Toggle 'show' class
});

