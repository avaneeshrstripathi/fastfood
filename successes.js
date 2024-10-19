// Function to animate numbers
function animateNumber(id, start, end, duration) {
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / (end - start)));
    
    const timer = setInterval(() => {
        current += increment;
        document.getElementById(id).textContent = current;
        if (current === end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Detect when 'Our Success' section is in view
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Trigger animations on scroll
window.addEventListener('scroll', () => {
    const successSection = document.querySelector('.our-successes');
    
    if (isInViewport(successSection)) {
        // Animate only when the section is in view
        animateNumber('number2', 0, 100, 2000); // Projects Completed
        animateNumber('number3', 0, 30, 2000); // Awards Won
        animateNumber('number4', 0, 10, 2000); // Cups of Coffee
    }
});
