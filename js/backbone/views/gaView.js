var GaView = Backbone.View.extend({
  el: "#body",
  gaTemplate: _.template($('#ga-template').html()),
  initialize: function() {
    this.render();
    $('.project-caption').hide();
  },
  events: {
    'mouseover .project-photo' : 'showCaption'
  },
  render: function() {
    this.$el.html(this.gaTemplate());
    return this;
  },
  showCaption: function(e) {
    console.log('show projects');
    e.preventDefault();
    $projectDiv = $(e.currentTarget);
    $projectDiv.find('.project-caption').show().mouseleave(function() {
      $('.project-caption').hide();
    }); 
  },
});