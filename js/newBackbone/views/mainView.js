var MainView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#landing-template').html()),
  projectTemplate: _.template($('#project-template').html()),
  photographyTemplate: _.template($('#photography-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  events: {
    'click #btn-projects'    : 'showProjects',
    'mouseover .project-div' : 'showCaption',
    'click #btn-photography' : 'showPhotography'
  },
  render: function(){
    this.$el.html(this.mainTemplate());
  },
  showProjects: function() {
    this.$el.html(this.projectTemplate());
  },
  showCaption: function(e) {
    e.preventDefault();
    $projectDiv = $(e.currentTarget);
    $projectDiv.find('.project-text').show().mouseleave(function() {
      $('.project-text').hide();
    });
    $projectDiv.find('.project-block').css('opacity', '0.8').mouseleave(function() {
      $('.project-block').css('opacity', '0.18');
    });
  },
  showPhotography: function() {
    this.$el.html(this.photographyTemplate());
  }
 });