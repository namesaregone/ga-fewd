console.log("Is this thing on?")

//When button is clicked:
//1. Grab value from input
//2. Convert value to number
//3. Perform math
//4. Print new value to dom
//parseInt("5") to convert a string to an integer
//also add a select tag to the css file and create 
//a dropdown that changes the conversion the other way

$("a").on("click", function() {
  $(".dropdown").text("Celsius");
});

$("button").on("click", function() {
  var celsius = $("input").val();
  // var userNum = $(parseInt(celsius))
  var fahrenheit = celsius * 9/5 + 32;
  // var fahrenheit = $("#converted").text(userNum * 3);
  // console.log(fahrenheit)
  $("#converted").text(fahrenheit);
});


