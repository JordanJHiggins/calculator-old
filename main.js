const addButton = document.querySelector(".add");
const subtractButton = document.querySelector(".subtract");

// Find method to avoid repeating this code for each button
addButton.addEventListener("click", () => {
  console.log(operate(addition, 8, 2));
});

subtractButton.addEventListener("click", () => {
  console.log(operate(subtract, 8, 2));
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

// console.log(operate(divide, 20, 4));
