import Swiper from 'swiper/bundle';

const swiper = new Swiper('.product-swiper', {
  slidesPerView: 1,
  loop: true,
  spaceBetween: 50,
  navigation: {
    prevEl: '.product-swiper__button--prev',
    nextEl: '.product-swiper__button--next',
  },
  pagination: {
    clickable: true,
    el: '.product-swiper__pagination',
    renderBullet: function (index, className) {
      return `<span class="product-swiper__pagination-item ${className}">
        <span class="visually-hidden">${index}</span>
      </span>`;
    }
  }
});
