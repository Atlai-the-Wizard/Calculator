let currentInput = '';
let currentOpertation = '';
let previousInput = '';

function appendNumber(number) {
  currentInput += number;
  document.querySelector('.display').textContent = `${previousInput} ${currentOpertation} ${currentInput}`;
}

function appendDecimal(decimal) {
  if (currentInput.includes('.')) {
    return;
  }
  if (currentInput === '') {
    currentInput = '0.';
    document.querySelector('.display').textContent = `${previousInput} ${currentOpertation} ${currentInput}`;
  } else {
    currentInput += decimal;
    document.querySelector('.display').textContent = `${previousInput} ${currentOpertation} ${currentInput}`;
  }
}

function appendOperation(operation) {
  if (currentInput === '') return;
  if (previousInput !== '') {
    calculate();
  }
  currentOpertation = operation;
  previousInput = currentInput;
  currentInput = '';
  document.querySelector('.display').textContent = `${previousInput} ${currentOpertation}`;
}

function calculate() {
  if (previousInput === '' || currentInput === '') return;
  let result;
  let prev = parseFloat(previousInput);
  let current = parseFloat(currentInput);

  switch (currentOpertation) {
    case '+':
      result = prev + current;
      break;
    case '-':
      result = prev - current;
      break;
    case '*':
      result = prev * current;
      break;
    case '/':
      if (current === 0) {
        alert("That is not currently possible.");
        return;
      }
      result = prev / current;
      break;
    default:
      return;
  }
  currentInput = result.toString();
  currentOpertation = '';
  previousInput = '';
  document.querySelector('.display').textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  previousInput = '';
  currentOpertation = '';
  document.querySelector('.display').textContent = '0';
}