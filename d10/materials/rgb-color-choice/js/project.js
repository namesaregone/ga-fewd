console.log("is this thing on?");

$("a").on("click", function(){
  var redValue = $("input#red").val();
  var greenValue = $("input#green").val();
  var blueValue = $("input#blue").val();
  var RGBCombined = ("rgb("+ redValue + "," + greenValue + "," + blueValue +")");
  $("div#wrapper").css("background-color", RGBCombined)

  // console.log(RGBCombined)

  // $("div#wrapper").css("background-color", "rgb(RGBCombined)")
  })
  // var = redValue = $("input").val();
  // var = greenValue =
  // var = blueValue =
  // var = RGBCombined = 

