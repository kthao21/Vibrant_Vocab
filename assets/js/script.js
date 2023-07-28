
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=30',
          function(data) {
//console.log(data);

  var element = data[Math.floor(Math.random()*30)];
            
  $(".button").on("click", function() {
    (element);
  })

  $('body').css({
    "background-image": "url("+ element.imageUrl +")"
 
  });
});

$(".button").on("click", function(event) {
  event.preventDefault();
  wordSearch();
});

function wordSearch(){
//var userInputEl = $(this).siblings('#userInput').val();
var userInputEl = document.querySelector("#userInput");
var word = userInputEl.value;
//var word = "coffee"
console.log("You Searched");

$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word, 
            function(data){
              
              console.log(data);   

            });
        };
