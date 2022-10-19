// display
const display = document.querySelector(".display");
// containers
const allButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");

//

function addition(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function displayWindow() {
  // populates display when numbers are clicked.
  let displayValue = [];

  allButtons.addEventListener("click", (event) => {
    let clickedValue = event.target.value;

    displayValue.push(clickedValue);

    display.innerHTML = displayValue.join("");
  });

  operationButtons.addEventListener("click", (event) => {
    let clickedValue = event.target.value;

    displayValue.push(clickedValue);

    display.innerHTML = displayValue.join(" ");
  });

  return displayValue;
}

function operate(operator, a, b) {
  switch (operator) {
    case addition:
      return addition(a, b);
    case subtract:
      return subtract(a, b);
    case multiply:
      return multiply(a, b);
    case divide:
      return divide(a, b);
  }
}

displayWindow();
