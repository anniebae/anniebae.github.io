var MainView = Backbone.View.extend({
  el: "#main",
  landingTemplate: _.template($('#landing-template').html()),
  projectsTemplate: _.template($("#projects-template").html()),
  resumeTemplate: _.template($("#resume-template").html()),
  photographyTemplate: _.template($("#photography-template").html()),
  contactsTemplate: _.template($("#contacts-template").html()),
  mainTemplate: _.template($('#main-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.mainTemplate());
  },
  showMain: function() {
    $('#main').html(this.mainTemplate());
  },
  showProjects: function() {
    $('#main').html(this.projectsTemplate());
  },
  showResume: function() {
    $('#main').html(this.resumeTemplate());
  },
  showPhotography: function() {
    $('#main').html(this.photographyTemplate());
  },
  showContacts: function() {
    $('#main').html(this.contactsTemplate());
  }
});