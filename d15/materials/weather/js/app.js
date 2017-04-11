// $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=NewYork,NY&units=imperial&appid=645effcfb82d6445bffdf9155be1ee2f", function(data){
//   console.log(data);
// });

$("button").on("click", function(){
  var location = $("input").val();
  // var location = input.split(" ");
  // console.log(location)
  var callJSON = ("http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&appid=645effcfb82d6445bffdf9155be1ee2f");
  // console.log(callJSON);
  // 
  $.getJSON(callJSON, function(data){
    
     $("span.temperature").text(data.main.temp);
     // console.log(data);
     // console.log(data.weather[0].icon);
     var iconLink = data.weather[0].icon
     // console.log(iconLink)
     $("img.icon").attr("src", "http://openweathermap.org/img/w/" + iconLink + ".png")
      });       
    
})

