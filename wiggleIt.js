$(document).ready(function() {
  var enableWiggleIt = true; // insert criteria here for when you want to enable it...
  function wiggleIt(){
    var allElements = $('*');
    var rnd = function(st, rng) {
      return Math.floor(Math.random() * rng) + st;
    }
    setInterval(function(){
      var element = $(allElements[rnd(0, allElements.length - 1)]);
      var h = element.height();
      var w = element.width();
      element.height(h + rnd(-5, 10)).width(w + rnd(-5, 10));
    }, 100);
    if (enableWiggleIt) { wiggleIt(); }
  }
});
