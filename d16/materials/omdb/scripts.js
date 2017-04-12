$("button").on("click", function(){

var movTitle = $("input").val();

  $.getJSON("http://omdbapi.com/?t=" + movTitle, function(data){
    var titleAndRating = data.Title + " (" + data.Rated + ")"
    
    $(".title").text(titleAndRating);
    $(".year").text(data.Year);
    $(".poster").attr("src", data.Poster);
    $(".plot").text(data.Plot);

    var liHistory = "<li>" + data["Title"] + "</li>";
    $('ul.search-history').append(liHistory)

    });
});

    $("ul.search-history").on("click", function(event){
    var movTitle = $(event.target).text();

    // var movTitle = $("input").val();

  $.getJSON("http://omdbapi.com/?t=" + movTitle, function(data){
    var titleAndRating = data.Title + " (" + data.Rated + ")"
    
    $(".title").text(titleAndRating);
    $(".year").text(data.Year);
    $(".poster").attr("src", data.Poster);
    $(".plot").text(data.Plot);
});

});
