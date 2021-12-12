import Swiper, { Navigation } from 'swiper';
Swiper.use([Navigation]);

const Carousel = (container) => {
    const swiper = new Swiper(container, {
      slidesPerView: 1,
      spaceBetween: 20,
      breakpoints: {
        577: {
          slidesPerView: 2
        },
        1367: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },

      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
}
  export default Carousel;