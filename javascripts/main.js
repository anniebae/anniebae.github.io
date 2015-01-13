$(document).ready(function(){

  $('.anniebae').mouseenter(function(){
    $(this).animate({
      height: "85px",
      width: "85px"
    });
  });
  $('.anniebae').mouseleave(function(){
    $(this).animate({
      height: "80px",
      width: "80px"
    });
  });


  $('.project-photo').hover(function(){
    $('.project-caption', this).stop(true, true).slideDown("normal");
  }, function(){
    $('.project-caption', this).stop(true, true).hide();
  });

})