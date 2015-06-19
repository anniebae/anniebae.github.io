new WOW().init();

new MainView();

$(function() {
  $('#trigger-overlay').click(function() {
    console.log('overlay button clicked');
    $('.overlay').appear();
  });
})