// display
const display = document.querySelector(".display");
// containers
const allButtons = document.querySelector(".numButtonsContainer");
const operationButtons = document.querySelector(".operationButtonContainer");

//  Use event delegation to reduce repetition?
addButton.addEventListener("click", () => {
  // we dont want to call operate here, should be storing the operation to pass to operate function.
  console.log(operate(addition, 8, 2));
});

subtractButton.addEventListener("click", () => {
  console.log(operate(subtract, 8, 2));
});

multiplyButton.addEventListener("click", () => {
  console.log(operate(multiply, 8, 2));
});
divideButton.addEventListener("click", () => {
  console.log(operate(divide, 8, 2));
});

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
