var MainView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#landing-template').html()),
  projectTemplate: _.template($('#project-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  events: {
    'click #btn-projects' : 'showProjects'
  },
  render: function(){
    this.$el.html(this.mainTemplate());
  },
  showProjects: function() {
    this.$el.html(this.projectTemplate());
  }
 });