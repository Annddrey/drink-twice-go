const productFilterSlider = document.querySelector('.product-filter__slider');
const resetButton = document.querySelector('.product-filter__button--reset');
const productFilter = document.getElementById('product-filter');
const minPriceInput = document.getElementById('min-price-input');
const maxPriceInput = document.getElementById('max-price-input');


noUiSlider.create(productFilterSlider, {
  range: {
    'min': 0,
    'max': 1000
  },
  start: [0,900],
  connect: true,

  format: {
    to: function(value) {
      return value.toFixed(0);
    },
    from: function(value) {
      return parseFloat(value);
    }
  }
});

productFilterSlider.noUiSlider.on('update', (slidersValues) => {
  minPriceInput.value = slidersValues[0];
  maxPriceInput.value = slidersValues[1];
});

minPriceInput.addEventListener('change', () => {
  productFilterSlider.noUiSlider.set([minPriceInput.value, null]);
});

maxPriceInput.addEventListener('change', () => {
  productFilterSlider.noUiSlider.set([null, maxPriceInput.value]);
});

const handlerEnterinInput = (evt) => {
  if (evt.key === 'Enter') {
    evt.preventDefault();
  }
};


maxPriceInput.addEventListener('keydown', handlerEnterinInput);
minPriceInput.addEventListener('keydown', handlerEnterinInput);


resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  productFilter.reset();
  productFilterSlider.noUiSlider.set([minPriceInput.value, maxPriceInput.value]);
});
