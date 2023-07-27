

// Retrieve a set of top backgrounds
$.getJSON('http://www.colourlovers.com/api/patterns/top?jsonCallback=?&numResults=80',
          function(data) {

  // Randomly select one of the elements
  var element = data[Math.floor(Math.random()*80)];

  // Update the body background with the url
  $('body').css({
    "background-image": "url("+ element.imageUrl +")"
  });
});
console.log(Hello);