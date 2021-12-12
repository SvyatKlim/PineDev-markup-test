import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const Carousel = (container) => {
    const swiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 30,
      breakpoints: {
        576: {
          slidesPerView: 3
        },
        428: {
          slidesPerView: 2
        },
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
  export default Carousel;