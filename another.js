// all selectors
let curDisplay = document.querySelector(".currentDisplay");
let prevDisplay = document.querySelector(".previousDisplay");
const button = document.querySelectorAll("[number]");
const operator = document.querySelectorAll("[operator]");
const clearButton = document.querySelector(".clear");
const equalButton = document.querySelector("[equal]");
const delButton = document.querySelector(".delete");
const sqrButton = document.querySelector(".square");

// all functions
function showDisplay(event) {
  event.preventDefault();
  let displayVal = "";
  const value = event.target.value;
  if (
    (value == "+" || value == "-" || value == "*" || value == "÷") &&
    curDisplay.textContent.includes(".") &&
    curDisplay.textContent.length == 1
  )
    return;

  if (
    (value == "+" || value == "-" || value == "*" || value == "÷") &&
    curDisplay.textContent == "" &&
    prevDisplay.textContent == ""
  )
    return;

  if (value == "." && curDisplay.textContent.includes(".")) {
    return;
  } else if (
    (value == "+" || value == "-" || value == "*" || value == "÷") &&
    (prevDisplay.textContent.includes("+") ||
      prevDisplay.textContent.includes("-") ||
      prevDisplay.textContent.includes("*") ||
      prevDisplay.textContent.includes("÷"))
  ) {
    return;
  } else
    curDisplay.textContent =
      curDisplay.textContent.toString() + value.toString();
  curDisplay.style.color = "white";

  if (
    prevDisplay.textContent.includes("+") ||
    prevDisplay.textContent.includes("-") ||
    prevDisplay.textContent.includes("*") ||
    prevDisplay.textContent.includes("÷")
  ) {
    return;
  } else if (
    curDisplay.textContent != "" &&
    (value == "+" || value == "-" || value == "*" || value == "÷")
  ) {
    prevDisplay.textContent = curDisplay.textContent;
    prevDisplay.style.color = "white";
    curDisplay.textContent = "";
  }
}

function clearAll(event) {
  curDisplay.textContent = "";
  prevDisplay.textContent = "";
}

function calculate() {
  let calculation;
  let firstNumb = parseFloat(curDisplay.textContent);
  let secondNumber = parseFloat(
    prevDisplay.textContent.substring(0, prevDisplay.textContent.length)
  );
  let operator = prevDisplay.textContent.substring(
    prevDisplay.textContent.length,
    prevDisplay.textContent.length - 1
  );

  switch (operator) {
    case "+":
      calculation = secondNumber + firstNumb;
      curDisplay.textContent = calculation;
      prevDisplay.textContent = calculation;
      break;
    case "-":
      calculation = secondNumber - firstNumb;
      curDisplay.textContent = calculation;
      prevDisplay.textContent = calculation;
      break;
    case "*":
      calculation = secondNumber * firstNumb;
      curDisplay.textContent = calculation;
      prevDisplay.textContent = calculation;
      break;
    case "÷":
      calculation = secondNumber / firstNumb;
      curDisplay.textContent = calculation;
      prevDisplay.textContent = calculation;
      break;

    default:
      calculation = "No value found";
  }
}

function deleteElement() {
  curDisplay.textContent = curDisplay.textContent.toString().slice(0, -1);
}

function squareElement() {
  if (
    curDisplay.textContent.includes(".") &&
    curDisplay.textContent.length == 1
  )
    return;

  if (curDisplay.textContent == "") return;
  let number = parseFloat(curDisplay.textContent);
  number = number * number;
  curDisplay.textContent = number;
}

// all event listeners

button.forEach((element) => {
  element.addEventListener("click", showDisplay);
});

operator.forEach((element) => {
  element.addEventListener("click", showDisplay);
});
clearButton.addEventListener("click", clearAll);
equalButton.addEventListener("click", calculate);
delButton.addEventListener("click", deleteElement);
sqrButton.addEventListener("click", squareElement);
