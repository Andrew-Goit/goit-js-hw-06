const sliderRangeInput = document.querySelector('#font-size-control');

const textSizeOutput = document.querySelector('#text');

sliderRangeInput.addEventListener('change', onChange);
function onChange (event) { 
  textSizeOutput.style.fontSize = `${event.currentTarget.value}px`;
};