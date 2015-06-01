var ProjectsView = Backbone.View.extend({
  el: "#body",
  projectsTemplate: _.template($("#projects-template").html()),
  initialize: function() {
    this.render();
    $('.project-caption').hide();
  },
  events: {
    'mouseover .project-photo'  : 'showCaption'
  },
  render: function() {
    this.$el.html(this.projectsTemplate());
    return this;
  },
  showCaption: function(e) {
    console.log('show projects');
    e.preventDefault();
    $projectDiv = $(e.currentTarget);
    $projectDiv.find('.project-caption').show().mouseleave(function() {
      $('.project-caption').hide();
    }); 
  },
});



// $(".bulletProj,.caption").mouseenter(function() {              
//          $(".caption").toggle();        
//     }).mouseleave(function () {     
//         $(".caption").hide();
//     });