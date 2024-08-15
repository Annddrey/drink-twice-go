import Swiper from 'swiper/bundle';

const swiper = new Swiper('.product-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 50,
  navigation: {
    prevEl: '.product-swiper__button--prev',
    nextEl: '.product-swiper__button--next',
  },
});
