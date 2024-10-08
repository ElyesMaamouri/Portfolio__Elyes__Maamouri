// Picture before and after 
const containerDiv = document.querySelector('.picture-container');
document.querySelector('.slider').addEventListener('input', (e) => {
  containerDiv.style.setProperty('--position', `${e.target.value}%`);
})

