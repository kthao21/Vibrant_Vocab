//create a function to handle background change using colourlover API
function changeBackground(){
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=60',
          function(data) {
            //console.log(data);
            //use math random to select a random number between 1-60
            var element = data[Math.floor(Math.random()*60)];
            //use the API data to set the background image based on random number generated above
            $('body').css({
             "background-image": "url("+ element.imageUrl +")"
              });
          });
}
// call change background function for initial page load
changeBackground();
//set event listener to run functions on search
$(".button").on("click", function(event) {
  event.preventDefault();
  wordSearch();
  changeBackground();
});
//create a word search function
function wordSearch(){
//declare variables needed
var word = $('input[name="userInput"]').val();
console.log(word);
var uppWord = word.toUpperCase();
var answerEl = document.getElementById('answer');
//use dictionary API to find definition for word
$.getJSON('https://api.dictionaryapi.dev/api/v2/entries/en/'+ word, 
            function(data){
              //console.log(data)
              var def1 = data[0].meanings[0].definitions[0].definition;
              console.log(def1);  
              
              //below is the code to find 2nd and 3rd definitions however if a word does not contain multiple it causes an error and wont load any
              //var def2 = data[0].meanings[0].definitions[1].definition;
              //console.log(def2); 
              //var def3 = data[0].meanings[0].definitions[2].definition;
              //console.log(def3); 

            //display definition on document
            answerEl.innerHTML= "  1: "+ def1.trim() ;
            answerEl.setAttribute("style", "margin:auto; width:80%; text-align:center;");
           //set previous searches to local storage  
            var lastSearch = {
                word: uppWord.trim(),
                definition: def1.trim()
              };
            localStorage.setItem("LastSearch",JSON.stringify(lastSearch));    
          
            renderLastSearch();
           //create function to display past searches on document
           function renderLastSearch() {
            var prevSearch = JSON.parse(localStorage.getItem("LastSearch"));
            var resultsEl = document.createElement("h2");
            var pastResultsEl = document.getElementById('pastResults');
            if (prevSearch !== null) {
              resultsEl.textContent = prevSearch.word + ": " + prevSearch.definition;
              pastResultsEl.appendChild(resultsEl);
              resultsEl.setAttribute("style", "margin:auto; width:80%; text-align:center;");
          }
          }
            });
        };
//function to load last search upon page refresh
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