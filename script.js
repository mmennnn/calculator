let expression = '';

function clearDisplay() {
  document.getElementById('display').value = '';
  expression = '';
}

function appendCharacter(char) {
  expression += char;
  document.getElementById('display').value = expression;
}

function evaluateExpression() {
  try {
    const result = eval(expression);
    document.getElementById('display').value = result;
    expression = '';
  } catch (error) {
    document.getElementById('display').value = 'Error';
  }
}
