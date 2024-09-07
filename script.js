document.addEventListener('DOMContentLoaded', () => {
    // Create an intersection observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'fade-in' class to trigger the CSS animation
                entry.target.classList.add('fade-in');
                // Optionally unobserve the element after it's in view
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1  // Adjust as needed (0.1 means 10% of the element must be in view)
    });

    // Target the element to observe
    const targetElement = document.querySelector('.second-section-about-text');
    observer.observe(targetElement);
});
