// Change the page background to a random color each time the button is clicked.
// Rewritten using jQuery (only jQuery lib allowed for this exercise).

$(document).ready(function () {
  $("#colorBtn").on("click", function () {
    $("body").css("background-color", getRandomColor());
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
