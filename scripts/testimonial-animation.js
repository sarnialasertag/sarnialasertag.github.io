document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationName = entry.target.classList.contains('lefttilt') ? 'wiggle-lefttilt' : 'wiggle-righttilt';
                entry.target.style.animationDuration = '2s';
                entry.target.style.animationIterationCount = 'infinite';
                entry.target.style.animationTimingFunction = 'ease-in-out';
            } else {
                entry.target.style.animationName = 'none';
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.testimonial').forEach(testimonial => {
        observer.observe(testimonial);
    });
});
