const productFilterSlider = document.querySelector('.product-filter__slider');

noUiSlider.create(productFilterSlider, {
  range: {
    'min': 0,
    'max': 100
  },
  start: [20, 80],
  connect: true,
});
