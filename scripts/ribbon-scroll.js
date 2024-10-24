window.addEventListener('scroll', function () {
    requestAnimationFrame(() => {
        const scrollPosition = window.pageYOffset;
        const ribbonText = document.querySelector('.ribbontext');
        ribbonText.style.transform = `translateX(${-scrollPosition * 0.2}px)`;
    });
});
