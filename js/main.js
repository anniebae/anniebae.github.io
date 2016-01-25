console.log('hello world');

$(function() {

  $('.slideshow').cycle({ 
    fx:    'fade', 
    speed:  2000 
  });

  var travelography = $('.travelography a').simpleLightbox();
  var suburban = $('.sub-urbvn a').simpleLightbox();
  var whiskers = $('.whiskers a').simpleLightbox();
  var ix4 = $('.ix4 a').simpleLightbox();
  var hike = $('.hike a').simpleLightbox();

    var feed = new Instafeed({
        get: 'tagged',
        tagName: 'awesome',
        clientId: 'YOUR_CLIENT_ID'
    });
    feed.run();


});