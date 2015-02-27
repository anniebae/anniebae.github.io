var MainView = Backbone.View.extend({
  el: "#main",
  mainTemplate: _.template($('#main-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.mainTemplate());
  }
});