const decrementBtn = document.getElementById('decrement');
const incrementBtn = document.getElementById('increment');
const quantityInput = document.getElementById('quantity');

decrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  if (currentValue > 1) {
    quantityInput.value = currentValue - 1;
  }
});

incrementBtn.addEventListener('click', () => {
  let currentValue = parseInt(quantityInput.value);
  quantityInput.value = currentValue + 1;
});