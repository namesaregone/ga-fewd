console.log("Is this thing on?")

$("div").css("background-color", "red")
$("div").text("How's this for text?")

// $("div#box_one").on("click", function(){
//   $("div#box_one").css("height", "500px")
//   $("div#box_one").css("width", "500px")
// })

// $("div#box_two").on("click", function(){
//   $("div#box_two").css("height", "500px")
//   $("div#box_two").css("width", "500px")
// })

// var grow = true;

// $("div#box_one").on("click", function(){
//   if (grow === true) {
//     $("div#box_one").addClass("bigger");
//     grow = false;
//   } else {
//     $("div#box_one").removeClass("bigger");
//     grow = true;
//   }
// })  

// $("div#box_two").on("click", function(){
//     $("div#box_two").addClass("bigger")
// }) 

$("div#box_one").on("click", function(){
  $("div#box_one").toggleClass("bigger");
})

$("div#box_two").on("click", function(){
  $("div#box_two").toggleClass("bigger");
})