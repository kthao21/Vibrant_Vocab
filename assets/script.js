// We retrieve a set of the 50 top backgrounds
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=100', function(data) {

// we randomly select one of the elements
var element = data[Math.floor(Math.random()*50)];
// we update the body background with the url
$('body').css({
    "background-image": "url("+ element.imageUrl +")"
});
});
//This however, doesn’t make the pattern repeat itself. To do this we need to add the following css directives:


body {
    background-repeat: repeat;
}
