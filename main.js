// display
const display = document.querySelector(".display");
// containers
const allButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");

// custom methods?
// Use reduce for math functions?
// let globalValues = [
// {}
// ]

function addition(leftNumberValue = []) {
  let additionSum = leftNumberValue.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return additionSum;
}

function subtract(a, b) {
  let;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

function displayWindow() {
  // populates display when numbers are clicked. Add rightNumValue
  // nested arrays to store display values?
  let displayValue = [];

  allButtons.addEventListener("click", (event) => {
    let leftNumValue = event.target.value;

    displayValue.push(leftNumValue);

    display.innerHTML = displayValue.join("");
  });

  operationButtons.addEventListener("click", (event) => {
    let operatorValue = event.target.value;

    displayValue.push(operatorValue);

    display.innerHTML = displayValue.join(" ");
  });

  return displayValue;
}

function operate(leftNum, operator) {
  switch (operator) {
    case addition:
      // pass arguements here
      return addition(leftNum);
    case subtract:
      return subtract(a, b);
    case multiply:
      return multiply(a, b);
    case divide:
      return divide(a, b);
  }
}

// displayWindow();

console.log(operate([20, 20], addition));
