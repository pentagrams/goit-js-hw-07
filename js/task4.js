const refs = {
      btnDecrement: document.querySelector('button[data-action="decrement"]'),
      btnIncrement: document.querySelector('button[data-action="increment"]'),
      counterValue: document.querySelector('#value'),
};

let counterValueToNumber = Number(refs.counterValue.textContent);

const decrement = () => refs.counterValue.textContent = counterValueToNumber -= 1;

const increment = () => refs.counterValue.textContent = counterValueToNumber += 1;

refs.btnDecrement.addEventListener('click', decrement);
refs.btnIncrement.addEventListener('click', increment);