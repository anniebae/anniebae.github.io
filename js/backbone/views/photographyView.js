var PhotographyView = Backbone.View.extend({
  el: "#photography",
  photographyTemplate: _.template($("#photography-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.photographyTemplate());
  }
});