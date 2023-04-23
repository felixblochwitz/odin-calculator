let btns = document.querySelectorAll("button");
let display = document.querySelector(".display");
let displayTop = document.querySelector("#display-top")
let displayBottom = document.querySelector("#display-bottom")

btns.forEach(button => button.addEventListener("click", function(e) {
  if (e.target.id === "del") {
    clearDisplay();
  }
  else if (e.target.textContent === "="){
    evaluate();
  }
  else {
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
  term = term.replace("x", "*")
  term = term.replace("÷", "/")
  displayBottom.textContent = eval(term);
}


function setDisplayFontSize() {
  let fontSize = displayTop.offsetHeight - 1;
  displayTop.style.fontSize = `${fontSize}px`;
  displayBottom.style.fontSize = `${fontSize}px`;
}


setDisplayFontSize();
