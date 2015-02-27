$(function() {
  $('.carousel').carousel({
    interval: 5000
  });

  $('.project-photo').hover(function(){
    $('.project-caption', this).stop(true, true).slideDown("normal");
  }, function(){
    $('.project-caption', this).stop(true, true).hide();
  });

  $('.resume-photo').hover(function(){
    $('.resume-caption', this).stop(true, true).slideDown("normal");
  }, function(){
    $('.resume-caption', this).stop(true, true).hide();
  });


});

new AppView();

// new MainView();
// new ProjectsView();
// new ResumeView();
// new PhotographyView();
// new ContactsView();