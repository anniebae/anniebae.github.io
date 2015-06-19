var MainView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#landing-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  render: function(){
    this.$el.html(this.mainTemplate());
  }
 });