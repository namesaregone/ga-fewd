// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - .text() or .html()
// - .css()
// console.log("Is this thing on?")
var centerNum = 0

$("#a10").on("click", function(){
  centerNum = centerNum + 10;
  $("#out").text(centerNum);
});

$("#a20").on("click", function(){
  centerNum = centerNum + 20;
  $("#out").text(centerNum);
});

$("#a30").on("click", function(){
  centerNum = centerNum + 30;
  $("#out").text(centerNum);
});

$("#n10").on("click", function(){
  centerNum = centerNum - 10;
  $("#out").text(centerNum);
});

$("#n20").on("click", function(){
  centerNum = centerNum - 20;
  $("#out").text(centerNum);
});

$("#n30").on("click", function(){
  centerNum = centerNum - 30;
  $("#out").text(centerNum);
});

$("#red").on("click", function(){
  $("#out").toggleClass("red");
  $("#out").removeClass("blue");

});

$("#blue").on("click", function(){
  $("#out").removeClass("red");
  $("#out").toggleClass("blue");

});

$("#out").on("click", function(){
  $("#out").removeClass("red");
  $("#out").removeClass("blue");
  centerNum = 0;
  $("#out").text(centerNum);

});


  // var celsius = $("input").val();
  // var userNum = $(parseInt(celsius))
  // var fahrenheit = $(celsius * 3);
  // console.log(fahrenheit)