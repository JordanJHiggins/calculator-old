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

function add(userInput) {
  let additionSum = userInput.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  return additionSum;
}

function subtract(userInput) {
  let subtractionDiff = userInput.reduce(
    (accumulator, currentValue) => accumulator - currentValue,
    1
  );
  return subtractionDiff;
}

function multiply(userInput) {
  let multiProduct = userInput.reduce(
    (accumulator, currentValue) => accumulator * currentValue,
    1
  );
  return multiProduct;
}

function divide(userInput) {
  // Throw error when user divides by 0.
  let divideQuotient = userInput.reduce(
    (accumulator, currentValue) => accumulator / currentValue
  );
  return divideQuotient;
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

function operate(userInput, operator) {
  switch (operator) {
    case add:
      // pass arguements here
      return add(userInput);
    case subtract:
      return subtract(userInput);
    case multiply:
      return multiply(userInput);
    case divide:
      return divide(userInput);
  }
}

// displayWindow();

console.log(operate([20, 2], divide));
