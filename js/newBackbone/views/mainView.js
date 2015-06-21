var MainView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#landing-template').html()),
  projectTemplate: _.template($('#project-template').html()),
  photographyTemplate: _.template($('#photography-template').html()),
  resumeTemplate: _.template($('#resume-template').html()),
  contactTemplate: _.template($('#contact-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  events: {
    'click #btn-projects'     : 'showProjects',
    'mouseover .project-div'  : 'showCaption',
    'click #btn-photography'  : 'showPhotography',
    'click #btn-resume'       : 'showResume',
    'click #btn-contact'      : 'showContact',
    'mouseover .one-contact' : 'showText'
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
    var slider = new WallopSlider('.wallop-slider');
    return this;
  },
  showResume: function() {
    this.$el.html(this.resumeTemplate());
  },
  showContact: function() {
    this.$el.html(this.contactTemplate());
  },
  // showText: function(e) {
  //   e.preventDefault();
  //   $contactDiv = $(e.currentTarget);
  //   $contactDiv.find('.contact-text').show().mouseleave(function() {
  //     $('.contact-text').hide();
  //   });
  // }
 });