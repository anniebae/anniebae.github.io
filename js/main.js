console.log('hello world');

var overlayTrigger = function() {
  var triggerBttn = document.getElementById( 'trigger-overlay' ),
      overlay = document.querySelector( 'div.overlay' ),
      closeBttn = overlay.querySelector( 'button.overlay-close' );
      transEndEventNames = {
          'WebkitTransition': 'webkitTransitionEnd',
          'MozTransition': 'transitionend',
          'OTransition': 'oTransitionEnd',
          'msTransition': 'MSTransitionEnd',
          'transition': 'transitionend'
      },
      transEndEventName = transEndEventNames[ Modernizr.prefixed( 'transition' ) ],
      support = { transitions : Modernizr.csstransitions };

  function toggleOverlay() {
      if( classie.has( overlay, 'open' ) ) {
          classie.remove( overlay, 'open' );
          classie.add( overlay, 'close' );
          var onEndTransitionFn = function( ev ) {
              if( support.transitions ) {
                  if( ev.propertyName !== 'visibility' ) return;
                  this.removeEventListener( transEndEventName, onEndTransitionFn );
              }
              classie.remove( overlay, 'close' );
          };
          if( support.transitions ) {
              overlay.addEventListener( transEndEventName, onEndTransitionFn );
          }
          else {
              onEndTransitionFn();
          }
      }
      else if( !classie.has( overlay, 'close' ) ) {
          classie.add( overlay, 'open' );
      }
  }

  triggerBttn.addEventListener( 'click', toggleOverlay );
  closeBttn.addEventListener( 'click', toggleOverlay );
}


var slideshowCycle = function() {
  $('.slideshow').cycle({ 
    fx:    'fade', 
    speed:  2000 
  });
}

var workImages = function() {
  var portfolio = $('.portfolio a').simpleLightbox();
  var travelography = $('.travelography a').simpleLightbox();
  var suburban = $('.sub-urbvn a').simpleLightbox();
  var whiskers = $('.whiskers a').simpleLightbox();
  var whereTo = $('.whereTo a').simpleLightbox();
  var ix4 = $('.ix4 a').simpleLightbox();
  var restaurant = $('.restaurant a').simpleLightbox();
  var hike = $('.hike a').simpleLightbox();
}


new MainView();

$(function() {


  slideshowCycle();

  workImages();



});