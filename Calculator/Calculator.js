const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";
let result = "";

display.value = "";
display.rows = 2;
display.style.whiteSpace = "pre-wrap";
display.style.height = "60px";
display.style.overflowY = "auto";
display.readOnly = true;

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      expression = "";
      result = "";
      display.value = "";
    } else if (value === "⌫") {
      expression = expression.slice(0, -1);
      display.value = expression;
    } else if (value === "=") {
      try {
        result = eval(expression);
        display.value = expression + "\n" + result;
        expression = result.toString();
      } catch (e) {
        display.value = "Error";
        expression = "";
      }
    } else if (value === "+/-") {

    } else {
      expression += value;
      display.value = expression;
    }
  });
});
