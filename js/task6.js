const inputRef = document.querySelector('#validation-input');

console.dir(inputRef)
inputRef.addEventListener('blur', errorChecker);

function errorChecker() {
      if (inputRef.value.length == inputRef.dataset.length) {
            inputRef.classList.add('valid');
            inputRef.classList.remove('invalid')
      }

      if (inputRef.value.length != inputRef.dataset.length) {
            inputRef.classList.add('invalid')
            inputRef.classList.remove('valid');
      }

      if (inputRef.value.length == 0) {
            inputRef.classList.remove('invalid');
      }
}
