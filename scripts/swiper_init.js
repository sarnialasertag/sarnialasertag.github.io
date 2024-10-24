const swiper = new Swiper('.swiper-container', {
  loop: true,
  spaceBetween: 10,
  slidesPerView: 'auto',
  grabCursor: true,
  centeredSlides: false,
  autoplay: {
    delay: 3000,
  },
  preloadImages: true, // Disable preloading
  lazy: {
    loadPrevNext: true, // Load next/prev images in the queue
    loadPrevNextAmount: 7, // Number of slides to preload in advance
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
