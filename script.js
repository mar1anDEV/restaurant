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




window.addEventListener('load', () => {
    const spinner = document.getElementById('spinner');
    const spinnerBack = document.getElementById('spinner-background');
    const content = document.getElementById('content');
    const heroBanner = document.querySelector('.hero-banner');

    function areStylesApplied() {
        // Example check: ensure heroBanner has the expected style properties
        const bannerStyle = getComputedStyle(heroBanner);
        return bannerStyle.opacity === '1' && bannerStyle.transform === 'translateY(0px)';
    }

    function hideSpinnerAndShowContent() {
        // Hide the spinner and display the content
        spinner.style.display = 'none';
        spinnerBack.style.display = 'none'; // Hide the spinner background
        content.style.display = 'block'; // Show content
        console.log("All resources are loaded, including CSS.");
    }

    // Use a timeout to ensure CSS is applied
    setTimeout(() => {
        if (areStylesApplied()) {
            hideSpinnerAndShowContent();
        } else {
            // Optionally, retry or handle the case where CSS is not applied
            console.error("Styles might not be fully applied yet.");
            hideSpinnerAndShowContent(); // Proceed anyway
        }
    }, 1000); // Adjust timeout as needed
});








