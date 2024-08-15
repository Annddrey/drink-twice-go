import Swiper from 'swiper/bundle';

const productFilterSlider = document.querySelector('.product-filter__slider');

noUiSlider.create(productFilterSlider, {
  range: {
    'min': 0,
    'max': 100
  },
  start: [20, 80],
  connect: true,
});

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
