
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