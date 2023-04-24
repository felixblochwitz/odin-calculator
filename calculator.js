let btns = document.querySelectorAll("button");
let display = document.querySelector(".display");
let displayTop = document.querySelector("#display-top")
let displayBottom = document.querySelector("#display-bottom")

let ansResult = null;

btns.forEach(button => button.addEventListener("click", function(e) {
  if (e.target.id === "del") {
    clearDisplay();
  }
  else if (e.target.textContent === "="){
    evaluate();
  }
  else if (e.target.textContent === "ANS") {
    console.log(ansResult);
    if ((displayTop.textContent.length + ansResult.toString().length) <= 15) {
      writeToDisplay(ansResult);
    }
  }
  else if (displayTop.textContent.length <= 15){
  let input = e.target.textContent;
  writeToDisplay(input);
  }
}));

function writeToDisplay(x) {
  displayTop.textContent += x;
}

function clearDisplay() {
  displayTop.textContent = "";
  displayBottom.textContent = "";
}

function evaluate() {
  let term = displayTop.textContent;
  term = term.replace("x", "*");
  term = term.replace("÷", "/");
  let result = eval(term);
  saveResultToAns(result);
  displayBottom.textContent = result;
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
