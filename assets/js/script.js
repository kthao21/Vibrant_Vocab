

// Retrieve a set of the 50 top backgrounds
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=50',
          function(data) {

  // Randomly select one of the elements
  var element = data[Math.floor(Math.random()*50)];

  // Update the body background with the url
  $('body').css({
    "background-image": "url("+ element.imageUrl +")"
  });
});
console.log(Hello);