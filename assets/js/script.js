function changeBackground(){
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=60',
          function(data) {
//console.log(data);

  var element = data[Math.floor(Math.random()*60)];
            
  // $(".button").on("click", function(event) {
  //   event.preventDefault();
  //   (element);
  // })

  $('body').css({
    "background-image": "url("+ element.imageUrl +")"
 
  });
});
}
changeBackground();

$(".button").on("click", function(event) {
  event.preventDefault();
  wordSearch();
  changeBackground();
});

function wordSearch(){
var word = $('input[name="userInput"]').val();
var uppWord = word.toUpperCase();
console.log(word);

var answerEl = document.getElementById('answer');

$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word, 
            function(data){
              console.log(data)
            
              var def1 = data[0].meanings[0].definitions[0].definition;
              console.log(def1);  
              //var def2 = data[0].meanings[0].definitions[1].definition;
              //console.log(def2); 
              //var def3 = data[0].meanings[0].definitions[2].definition;
              //console.log(def3); 

            
            answerEl.innerHTML= "  1: "+ def1.trim() ;
            answerEl.setAttribute("style", "margin:auto; width:80%; text-align:center;");
            
            var lastSearch = {
                word: uppWord.trim(),
                definition: def1.trim()
              };

            localStorage.setItem("LastSearch",JSON.stringify(lastSearch));    
            renderLastSearch();



          function renderLastSearch() {
            var prevSearch = JSON.parse(localStorage.getItem("LastSearch"));
            var resultsEl = document.createElement("h2");
            var pastResultsEl = document.getElementById('pastResults');
            if (prevSearch !== null) {
            // document.querySelector(".preWords").innerHTML = prevSearch.word + ": " + prevSearch.definition
              resultsEl.textContent = prevSearch.word + ": " + prevSearch.definition;
              pastResultsEl.appendChild(resultsEl);
              resultsEl.setAttribute("style", "margin:auto; width:80%; text-align:center;");
          }
          }
            });
        };

        function previousSearch() {
          var prevSearch = JSON.parse(localStorage.getItem("LastSearch"));
          var resultsEl = document.createElement("h2");
          var pastResultsEl = document.getElementById('pastResults');
          if (prevSearch !== null) {
            resultsEl.textContent = prevSearch.word + ": " + prevSearch.definition;
            pastResultsEl.appendChild(resultsEl);
            resultsEl.setAttribute("style", "margin:auto; width:80%; text-align:center;");
        }
        };
        previousSearch();
