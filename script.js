var apiKey = "wl3TeYSBuwDsDxyW8rc3TGrXdcEzt7BM";
var userSearch = $('.search-term').val().trim();
var articleNumber = $('$records-retrieve').val();
// var startYear = 
// var endYear =  

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userSearch + articleNumber + "&api-key=" + apiKey;


$('#search-button').on('click', function (event) {
    event.preventDefault();

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        var articles = response.Article
        for (var i = 0; i > articleNumber; i++) {

        }
        var articleDiv = $("<div>");
        var p = $('<p>').t
        $(articleDiv).add
        $("#Top-articles").append(articleDiv);
    }
    )
})
