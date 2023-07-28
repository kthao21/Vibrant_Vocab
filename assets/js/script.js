
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=60',
          function(data) {
//console.log(data);

  var element = data[Math.floor(Math.random()*60)];
            
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
var word = $('input[name="userInput"]').val();

console.log(word);

var answerEl = document.getElementById('answer');

$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word, 
            function(data){
              console.log(data)
            
              var def1 = data[0].meanings[0].definitions[0].definition;
              console.log(def1);  
              var def2 = data[0].meanings[0].definitions[1].definition;
              console.log(def2); 
              var def3 = data[0].meanings[0].definitions[2].definition;
              console.log(def3); 

            
            answerEl.innerHTML= "  1: "+ def1 ;
            
                
              
            });
        };
