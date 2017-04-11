console.log("HELLOOOOOOO!");

// var originalText = $("p.cool").text();
// var additionalText = " And I added some stuff.";
// $("p.cool").text(originalText + additionalText);

// $("button").on("click", function() {
//   console.log("I WUZ CLICKED!");
// });


// $("button").on("click", function() {
//   $("p.cool").text("YOU CLICKED THE BUTTON!");
// });

//variables:

// var clickCount = 0;
// var originalText = $("p.cool").text();

//changes text on 2nd click only
// $("button").on("click", function() {
//   clickCount = clickCount + 1;
//   console.log(clickCount);
//   if (clickCount === 2) {
//    $("p.cool").text("YOU CLICKED THE BUTTON TWICE!");
//   } else {
//     // put it back the way it was
//     $("p.cool").text(originalText);
//   }
// });

// when a user enters text in the input field, 
// and presses the button, then, that text appears AS the h1 text




$("button").on("click", function(){
  var stuffTheUserTyped = $("input").val();
  $("h1").text(stuffTheUserTyped)
})
