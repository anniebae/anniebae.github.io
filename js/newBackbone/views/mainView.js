var MainView = Backbone.View.extend({
  el: "#body",
  mainTemplate: _.template($('#landing-template').html()),
  gaTemplate: _.template($('#ga-template').html()),
  initialize: function(){
    this.render();
    overlayTrigger();
  },
  events: {
    'click #btn-ga' : 'showGa'
  },
  render: function(){
    this.$el.html(this.mainTemplate());
  },
  showGa: function() {
    this.$el.html(this.gaTemplate());
  }
 });