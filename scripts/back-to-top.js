window.addEventListener('scroll', function () {
    const backToTopBtn = document.getElementById('backToTopBtn');
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const scrollThreshold = 300;

    if (scrollPosition > scrollThreshold) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

document.getElementById('backToTopBtn').addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
