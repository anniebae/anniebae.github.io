var GaView = Backbone.View.extend({
  el: "#body",
  gaTemplate: _.template($('#ga-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.gaTemplate());
  }
});