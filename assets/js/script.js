
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
var word = $('input[name="userInput"]').val();
console.log(word);

var answerEl = document.getElementById('answer');

$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word, 
            function(data){
              var info = (data[0])
            //  console.log(info); 
              var def = info.meanings;
            //  console.log(def);  
              var define = def[0];
            //  console.log(define); 
              var definitions = define.definitions;
             // console.log(definitions);
              var d1 = definitions[0];
             // console.log(d1);
              var d1def = d1.definition;
              console.log(d1def);
             var d2 = definitions[1];
             // console.log(d2);
              var d2def = d2.definition;
              console.log(d2def);
            //var d3 = definitions[2];
            // console.log(d3);
             //var d3def = d3.definition;
            // console.log(d3def);

            
            answerEl.innerHTML= "  1: "+ d1def +"  2: " + d2def ;
            
                
              
            });
        };
