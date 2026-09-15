// Change the page background to a random color each time the button is clicked.
// Pure vanilla JavaScript, no external libraries (jQuery forbidden).

document.addEventListener("DOMContentLoaded", function () {
  var button = document.getElementById("colorBtn");

  button.addEventListener("click", function () {
    document.body.style.backgroundColor = getRandomColor();
  });
});

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";

  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}