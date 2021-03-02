const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');



function addNameForInput(event) {
      if (event.currentTarget.value === '') {
            spanRef.textContent = 'незнакомец';
      } else {
            spanRef.textContent = event.currentTarget.value;
      }
};

inputRef.addEventListener('input', addNameForInput);
