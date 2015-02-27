$(function() {
  $('.carousel').carousel({
    interval: 5000
  });


  // $('.project-photo').hover(function(){
  //   $('.project-caption', this).stop(true, true).slideDown("normal");
  // }, function(){
  //   $('.project-caption', this).stop(true, true).hide();
  // });

  // $('.resume-photo').hover(function(){
  //   $('.resume-caption', this).stop(true, true).slideDown("normal");
  // }, function(){
  //   $('.resume-caption', this).stop(true, true).hide();
  // });

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

// new MainView();
// new ProjectsView();
// new ResumeView();
// new PhotographyView();
// new ContactsView();