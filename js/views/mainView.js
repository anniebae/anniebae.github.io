var MainView = Backbone.View.extend({
  el: "#body",
  projectTemplate: _.template($('#project-template').html()),
  photographyTemplate: _.template($('#photography-template').html()),
  resumeTemplate: _.template($('#resume-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  events: {
    'click #btn-home'         : 'initialize',
    'click #btn-projects'     : 'showProjects',
    'mouseover .project-div'  : 'showCaption',
    'click #btn-photography'  : 'showPhotography',
    'click #btn-resume'       : 'showResume',
    'click #btn-contact'      : 'showContact'
  },
  render: function(){
    var landing = new Landing();
  },
  showProjects: function() {
    this.$el.html(this.projectTemplate());
    overlayTrigger();
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
    var slider = new WallopSlider('.wallop-slider');
    overlayTrigger();
    return this;
  },
  showResume: function() {
    this.$el.html(this.resumeTemplate());
    overlayTrigger();
  },
  showContact: function() {
    var contact = new Contact();
  },
 });