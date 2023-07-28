
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=80',
          function(data) {
console.log(data);

  var element = data[Math.floor(Math.random()*80)];
            
  $(".button").on("click", function() {
    (element);
  })

  $('body').css({
    "background-image": "url("+ element.imageUrl +")"
 
  });
});

//function wordSearch(){


var userInputEl = $(this).siblings('#userInput').val();
console.log(userInputEl);

$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ userInputEl, 
            function(data){
              
              console.log(data);   

            });
//          };
