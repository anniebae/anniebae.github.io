$(function() {
  $('.carousel').carousel({
    interval: 3000
  });

  $('#ga-tab').on('click', function () {
    console.log('i work');
    $(this).parent().find('li active').removeClass('active');
    $(this).addClass('active');
  });
  $('#projects-tab').on('click', function() {
    console.log('i work');
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

new AppView();