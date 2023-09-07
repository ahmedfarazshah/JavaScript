var result = document.getElementById("result");

var buttons = document.querySelectorAll(".button");

for (var button of buttons) {
  button.addEventListener("click", function() {
    var value = button.value;
    result.value += value;
  });
}

var equalButton = document.querySelector(".button[value='=']");

equalButton.addEventListener("click", function() {
  var expression = result.value;
  var result = eval(expression);
  result.value = result;
});