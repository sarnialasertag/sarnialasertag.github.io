function toggleMobileNav() {
    var mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('active');

    if (mobileNav.classList.contains('active')) {
        document.addEventListener('click', closeNavOnClickOutside);
    } else {
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}

function closeNavOnClickOutside(event) {
    var mobileNav = document.getElementById('mobileNav');
    if (!mobileNav.contains(event.target) && !event.target.classList.contains('menu-icon')) {
        mobileNav.classList.remove('active');
        document.removeEventListener('click', closeNavOnClickOutside);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const mobileNavLinks = document.querySelectorAll('.mobile-nav ul li a');

    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function() {
            toggleMobileNav();
        });
    });
});
