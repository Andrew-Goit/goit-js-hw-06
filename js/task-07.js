const sliderRangeInput = document.querySelector('#font-size-control');

const textSizeOutput = document.querySelector('#text');

sliderRangeInput.addEventListener('input', onInput);
function onInput (event) { 
  textSizeOutput.style.fontSize = `${event.currentTarget.value}px`;
};