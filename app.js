/*-------------------------------- Constants --------------------------------*/
const Buttons = document.querySelectorAll(".button");
// const calculator = document.querySelector('#calculator');
const display = document.querySelector(".display");
/*-------------------------------- Variables --------------------------------*/
let leftHalf = "";
let rightHalf = "";
let operator = "";
let result = 0;
/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
Buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const pushedButton = event.target.innerText;
    console.log(pushedButton);


if (event.target.classList.contains("number")) {
  if (operator === "") {
    leftHalf = leftHalf + pushedButton;
  } else rightHalf = rightHalf + pushedButton;
  display.innerText = pushedButton;
}
if (pushedButton === "*") {
  operator = "*";
}
if (pushedButton === "-") {
  operator = "-";
}
if (pushedButton === "/") {
  operator = "/";
}
if (pushedButton === "+") {
  operator = "+";
}
if (pushedButton === "C") {
  leftHalf = "";
  rightHalf = "";
  operator = "";
  result = 0;
  display.innerText = "";
}
if (pushedButton === "=") {
  if (operator === "+") {
    result = parseInt(leftHalf) + parseInt(rightHalf);
    console.log(result);
    display.innerText = result
  }
  if (operator === "-") {
    result = parseInt(leftHalf) - parseInt(rightHalf);
    console.log(result);
    display.innerText = result

  }
  if (operator === "*") {
    result = parseInt(leftHalf) * parseInt(rightHalf);
    console.log(result);
    display.innerText = result
  }
  if (operator === "/") {
    result = parseInt(leftHalf) / parseInt(rightHalf);
    console.log(result);
    display.innerText = result
  }
}
});
});