var AppView = Backbone.View.extend({
  el: "#logo-navbar",
  logoNavbarTemplate: _.template($("#logo-navbar-template").html()),
  connectTemplate: _.template($("#connect-template").html()),
  mainTemplate: _.template($('#main-template').html()),
  projectsTemplate: _.template($("#projects-template").html()),
  resumeTemplate: _.template($("#resume-template").html()),
  photographyTemplate: _.template($("#photography-template").html()),
  contactsTemplate: _.template($("#contacts-template").html()),
  initialize: function(){
    this.renderLogoNavbar();
    this.showMain();
    this.renderConnect();
  },
  events: {
    'click #main-btn'        : 'showMain',
    'click #projects-btn'    : 'showProjects',
    'click #resume-btn'      : 'showResume',
    'click #photography-btn' : 'showPhotography',
    'click #contacts-btn'    : 'showContacts'
  },
  renderLogoNavbar: function() {
    this.$el.html(this.logoNavbarTemplate());
    return this;
  },
  renderConnect: function() {
    $('#connect').html(this.connectTemplate());
  },
  showMain: function() {
    var bodyView = new BodyView();
  },
  showProjects: function() {
    var projectsView = new ProjectsView();
  },
  showResume: function() {
    $('#body').html(this.resumeTemplate());
  },
  showPhotography: function() {
    $('#body').html(this.photographyTemplate());
  },
  showContacts: function() {
    $('#body').html(this.contactsTemplate)
  }
});