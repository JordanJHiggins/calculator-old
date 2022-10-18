// operations
const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");
const multiplyButton = document.querySelector(".multiply");
const divideButton = document.querySelector(".divide");
// display
const display = document.querySelector(".display");
// button container
const allButtons = document.querySelector(".numButtonsContainer");
// numbers
const seven = document.querySelector(".seven");
const eight = document.querySelector(".eight");
const nine = document.querySelector(".nine");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");
const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");

// populates display when numbers are clicked. Use for operations?
// allButtons.addEventListener("click", (event) => {
//   let displayValue = event.target.value;
//   return displayValue;
// });

addButton.addEventListener("click", () => {
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
  // populates display when numbers are clicked. Use for operations?
  allButtons.addEventListener("click", (event) => {
    let clickedValue = event.target.value;

    displayValue.push(clickedValue);

    display.innerHTML = displayValue.join("");
  });

  let displayValue = [];
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
