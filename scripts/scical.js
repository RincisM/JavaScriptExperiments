import { sin, cos, tan, pow, sqrt, log, log10, abs, factorial } from './math.js';


const inputField = document.getElementById('result');
const buttons = document.querySelectorAll('.calculator button');


function insert(text) {
  inputField.value += text;
}

function clearInput() {
  inputField.value = '';
}

function deleteInput() {
  inputField.value = inputField.value.slice(0, -1);
}


function calculate() {
  const input = inputField.value;
  if (input.includes('**') || input.includes('//')) {
    inputField.value = 'Error';
  } else {
    try {
      const result = eval(input);
      inputField.value = result;
    } catch (error) {
      inputField.value = 'Error';
    }
  }
}



buttons.forEach(button => {
  button.addEventListener('click', event => {
    const buttonText = event.target.textContent;
    switch (buttonText) {
      case 'sin':
        insert('sin(');
        break;
      case 'cos':
        insert('cos(');
        break;
      case 'tan':
        insert('tan(');
        break;
      case 'x^y':
        insert('pow(');
        break;
      case 'sqrt':
        insert('sqrt(');
        break;
      case 'log':
        insert('log(');
        break;
      case 'log10':
        insert('log10(');
        break;
      case '|x|':
        insert('abs(');
        break;
      case 'n!':
        insert('factorial(');
        break;
      case 'C':
        clearInput();
        break;
      case '←':
        deleteInput();
        break;
      case '=':
        calculate();
        break;
      case 'x':
        insert('x');
        break;
      case '//':
        inputField.value = 'Error';
        break;
      default:
        insert(buttonText);
    }
  });
});