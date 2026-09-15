
document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("calcForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    handleCalculation();
  });

  // Every 30 seconds, remind the user to use the calculator.
  setInterval(function () {
    alert("Please, use me...");
  }, 30000);
});

function handleCalculation() {
  var leftRaw = document.getElementById("leftMember").value;
  var rightRaw = document.getElementById("rightMember").value;
  var operator = document.getElementById("operator").value;

  if (!isPositiveInteger(leftRaw) || !isPositiveInteger(rightRaw)) {
    alert("Error :(");
    return;
  }

  var left = parseInt(leftRaw, 10);
  var right = parseInt(rightRaw, 10);

  if ((operator === "/" || operator === "%") && right === 0) {
    alert("It's over 9000!");
    return;
  }

  var result = computeResult(left, operator, right);

  console.log(result);
  alert(result);
}

// Only accept strings made exclusively of digits (positive integers, including 0).
function isPositiveInteger(value) {
  return /^\d+$/.test(value);
}

function computeResult(left, operator, right) {
  switch (operator) {
    case "+":
      return left + right;
    case "-":
      return left - right;
    case "*":
      return left * right;
    case "/":
      return left / right;
    case "%":
      return left % right;
    default:
      return null;
  }
}