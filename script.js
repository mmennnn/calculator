let inputDisplay = document.getElementById('input-display');

function clearDisplay() {
  inputDisplay.value = '';
}

function appendCharacter(char) {
  inputDisplay.value += char;
}

function evaluateExpression() {
  try {
    inputDisplay.value = eval(inputDisplay.value);
  } catch (error) {
    inputDisplay.value = 'Error';
  }
}
