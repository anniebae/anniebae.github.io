var ResumeView = Backbone.View.extend({
  el: "#body",
  resumeTemplate: _.template($("#resume-template").html()),
  initialize: function() {
    this.render();
    $('.resume-caption').hide();
  },
  events: {
    'mouseover .resume-photo' : 'showResume'
  },
  render: function() {
    this.$el.html(this.resumeTemplate());
    return this;
  },
  showResume: function(e) {
    console.log('show Resume');
    e.preventDefault();
    $resumeDiv = $(e.currentTarget);
    $resumeDiv.find('.resume-caption').show().mouseleave(function() {
      $('.resume-caption').hide();
    });
  },
});
