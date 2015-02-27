var ProjectsView = Backbone.View.extend({
  el: "#projects",
  projectsTemplate: _.template($("#projects-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.projectsTemplate());
  }
});