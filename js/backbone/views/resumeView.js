var ResumeView = Backbone.View.extend({
  el: "#body",
  resumeTemplate: _.template($("#resume-template").html()),
  initialize: function() {
    this.render();
  },
  events: {
    'mouseenter .resume-photo' : 'showResume'
  },
  render: function() {
    this.$el.html(this.resumeTemplate());
    return this;
  },
  showResume: function(e) {
    console.log('show Resume');
    $(e.currentTarget).find('.resume-caption').css('display', 'block');
    $(e.currentTarget).on('mouseleave', function() {
      $(e.currentTarget).find('.resume-caption').css('display', 'none');
    });
  },




});





// var ProjectsView = Backbone.View.extend({
//   el: "#body",
//   projectsTemplate: _.template($("#projects-template").html()),
//   initialize: function() {
//     this.render();
//   },
//   events: {
//     'mouseenter .project-photo'  : 'showCaption'
//   },
//   render: function() {
//     this.$el.html(this.projectsTemplate());
//     return this;
//   },
//   showCaption: function(e) {
//     console.log('hey man! love you!');
//     $(e.currentTarget).find('.project-caption').css('display', 'block');
//     $(e.currentTarget).on('mouseleave', function() {
//       $(e.currentTarget).find('.project-caption').css('display', 'none');
//     });
//   },
// });

