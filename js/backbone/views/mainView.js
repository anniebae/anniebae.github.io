var BodyView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#main-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.mainTemplate());
    return this;
  }
});