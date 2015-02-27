var AppView = Backbone.View.extend({
  el: "#logo-navbar",
  logoNavbarTemplate: _.template($("#logo-navbar-template").html()),
  mainTemplate: _.template($('#main-template').html()),
  projectsTemplate: _.template($("#projects-template").html()),
  resumeTemplate: _.template($("#resume-template").html()),
  photographyTemplate: _.template($("#photography-template").html()),
  contactsTemplate: _.template($("#contacts-template").html()),
  initialize: function(){
    this.renderLogoNavbar();
    this.showMain();
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
  showMain: function() {
    this.renderLogoNavbar();
    $('#body').html(this.mainTemplate());
  },
  showProjects: function() {
    $('#body').html(this.projectsTemplate());
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