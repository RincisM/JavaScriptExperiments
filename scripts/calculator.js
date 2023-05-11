let expression = '';
let lastResult = null;

function clearResult() {
  expression = '';
  lastResult = null;
  updateDisplay();
}

function backspace() {
  expression = expression.slice(0, -1);
  updateDisplay();
}

function insert(value) {
  expression += value;
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(expression);
    lastResult = result;
    expression = result.toString();
    updateDisplay();
  } catch (error) {
    alert('Invalid expression');
    clearResult();
  }
}

function updateDisplay() {
  const resultField = document.getElementById('result');
  if (lastResult !== null) {
    resultField.value = lastResult;
  } else {
    resultField.value = expression || '0';
  }
}
