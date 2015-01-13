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

  $('.carousel').carousel({
        interval: 3000
    });


  $('#projects-tab').on('click', function() {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });

$('#resume-tab').on('click', function() {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#photography-tab').on('click', function() {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });

  $('#contacts-tab').on('click', function() {
    $(this).parent().find('li.active').removeClass('active');
    $(this).addClass('active');
  });




});


