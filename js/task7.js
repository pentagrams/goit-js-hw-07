const inputRef = document.querySelector('#font-size-control');
const spanRef = document.querySelector('#text');

inputRef.addEventListener('input', onfontSizeControl);

function onfontSizeControl(event) {
      let countPixel = 
      spanRef.style.fontSize = `${Number(event.currentTarget.value) + 50}%`;
}