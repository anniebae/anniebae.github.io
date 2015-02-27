var ResumeView = Backbone.View.extend({
  el: "#resume",
  resumeTemplate: _.template($("#resume-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.resumeTemplate());
  }
});