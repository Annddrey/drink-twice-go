import Swiper from 'swiper/bundle';

const nav = document.querySelector('.nav');
const navButton = document.querySelector('.nav__nav-button');

if (nav) {
  nav.classList.remove('nav--nojs');

  navButton.addEventListener('click', () => {
    nav.classList.toggle('nav--closed');
    nav.classList.toggle('nav--opened');
  });
}

const swiper = new Swiper('.product-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 50,
  navigation: {
    prevEl: '.product-swiper__button--prev',
    nextEl: '.product-swiper__button--next',
  },
});
