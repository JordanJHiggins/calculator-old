// display
const display = document.querySelector(".display");
// containers
const numberButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");
const operateButton = document.querySelector(".operateButtonContainer");

let displayValue = [];
let leftNumValue = [];
let operatorValue = [];
let rightNumValue = [];

function add(userInput) {
  accumulator = leftNumValue;
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

function displayWindow(operate) {
  numberButtons.addEventListener("click", (event) => {
    let leftNum = [event.target.value];

    leftNumValue.push(leftNum);
    displayValue.push(leftNum);

    display.innerHTML = displayValue.join("");
  });

  // operators
  operationButtons.addEventListener("click", (event) => {
    let operator = [event.target.value];

    operatorValue.push(operator);
    displayValue.push(operator);

    allowRightNum();
    display.innerHTML = displayValue.join("");
  });

  // operateButton.addEventListener("click", operate);

  function allowRightNum() {
    if (operatorValue.length > 0) {
      numberButtons.addEventListener("click", (event) => {
        let rightNum = [event.target.value];

        rightNumValue.push(rightNum);

        display.innerHTML = displayValue.join("");
      });
    }
  }

  return displayValue;
}

// Helper functions

// could this be improved? hacky? check if value is not a number or equal to a value in operator array??
function checkForOperator() {
  if (operatorValue.length > 0) {
    return true;
  }
}

function allowRightNum() {}

function operate(userInput, operator) {
  switch (operator) {
    case add:
      return add(userInput);
    case subtract:
      return subtract(userInput);
    case multiply:
      return multiply(userInput);
    case divide:
      return divide(userInput);
  }
}

function joiner(array) {
  let thisArray = array;

  let newJoinedArray = [parseInt(array.join(""))];

  return newJoinedArray;
}
displayWindow();
