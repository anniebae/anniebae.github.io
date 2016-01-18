console.log('hello world');

$(function() {

  $('.slideshow').cycle({ 
    fx:    'fade', 
    speed:  3000 
  });

  var gallery = $('.gallery a').simpleLightbox();


});