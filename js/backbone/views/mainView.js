var MainView = Backbone.View.extend({

  el: '#body',
  mainTemplate: _.template($('#home-template').html()),
  aboutTemplate: _.template($('#about-template').html()),
  workTemplate: _.template($('#work-template').html()),
  initialize: function() {
    this.render();
    overlayTrigger();
    slideshowCycle();
  },
  events: {
    'click #btn-home' : 'initialize',
    'click #btn-about' : 'showAbout',
    'click #btn-work' : 'showWork'
  },

  render: function() {
    this.$el.html(this.mainTemplate());
  },

  showAbout: function() {
    this.$el.html(this.aboutTemplate());
    overlayTrigger();
  },
  showWork: function() {
    this.$el.html(this.workTemplate());
    overlayTrigger();
    workImages();
  }

});