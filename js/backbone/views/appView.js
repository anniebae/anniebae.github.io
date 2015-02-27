var AppView = Backbone.View.extend({
  el: "#logo-navbar",
  logoNavbarTemplate: _.template($("#logo-navbar-template").html()),
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
});