
const body = document.querySelector('body');
const backgroundColor = document.querySelector('.color');
const changeColorButton = document.querySelector('button');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

changeColorButton.addEventListener('click', onClick);
function onClick (event) {
  body.style.background = getRandomHexColor();
  backgroundColor.textContent = getRandomHexColor();
}

// changeColorButton.addEventListener('click',() => { 
//   body.style.background = getRandomHexColor();
//   backgroundColor.textContent = getRandomHexColor();
// });


