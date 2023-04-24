let btns = document.querySelectorAll("button");
let display = document.querySelector(".display");
let displayTop = document.querySelector("#display-top");
let displayBottom = document.querySelector("#display-bottom");

let ansResult = null;

let isEvaluated = false;

btns.forEach((button) =>
  button.addEventListener("click", function (e) {
    if (e.target.id === "del") {
      clearDisplay();
    } else if (e.target.textContent === "=") {
      evaluate();
    } else {
      if (isEvaluated === true) {
        clearDisplay("top");
        isEvaluated = false;
      }
      if (e.target.textContent === "ANS" && ansResult != null) {
        if (displayTop.textContent.length + ansResult.toString().length <= 15) {
          writeToDisplayTop(ansResult);
        }
      } else if (displayTop.textContent.length <= 15) {
        let input = e.target.textContent;
        writeToDisplayTop(input);
      }
    }
  })
);

function writeToDisplayTop(x) {
  displayTop.textContent += x;
}

function clearDisplay(location) {
  if (location === "top") {
    displayTop.textContent = "";
    return;
  } else if (location === "bottom") {
    displayBottom.textContent = "";
    return;
  } else {
    displayTop.textContent = "";
    displayBottom.textContent = "";
    return;
  }
}

function evaluate() {
  let term = displayTop.textContent;
  term = term.replace("x", "*").replace("÷", "/");
  let result = eval(term);
  saveResultToAns(result);
  displayBottom.textContent = result;
  isEvaluated = true;
}

function saveResultToAns(lastResult) {
  ansResult = lastResult;
}

function setDisplayFontSize() {
  let fontSize = displayTop.offsetHeight - 1;
  displayTop.style.fontSize = `${fontSize}px`;
  displayBottom.style.fontSize = `${fontSize}px`;
}

setDisplayFontSize();
