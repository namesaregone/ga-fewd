console.log("Is this thing on?")

var clickCount = 0

// $("#btnOne").on("click", function() {
//   clickCount = clickCount + 1;
//   if (clickCount === 1) {
//     $("#one").css("display", "block");
//     $("#two").css("display", "none");
//   }
//   else {
//     $("#one").css("display", "none");
//     clickCount = 0;
//   }
  
// })


  // if ( $("#one").css("display") === "none" ) {
  //   $("#one").css("display", "block");
  // } else {
  //   $("#one").css("display", "none");
  // }
$("#btnOne").on("click", function() {
  $("#one").toggle();
})

$("#btnOne").on("focusout", function() {
  // $("#one").css("display", "none");
  $("#one").hide();
})

// $("#btnTwo").on("click", function() {
//   clickCount = clickCount + 1;
//   if (clickCount === 1) {
//     $("#two").css("display", "block");
//     $("#one").css("display", "none");
//   }
//   else {
//     $("#two").css("display", "none");
//     clickCount = 0;
//   }
  
// })

$("#btnTwo").on("click", function() {
  $("#two").toggle();
})

$("#btnTwo").on("focusout", function() {
  // $("#one").css("display", "none");
  $("#two").hide();
})