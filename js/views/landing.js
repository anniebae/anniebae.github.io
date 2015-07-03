var Landing = Backbone.View.extend({
  el: '.landing-page',
  containerTemplate: _.template($('#landing-container-template').html()),
  itemTemplate: _.template($('#landing-item-template').html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    var that = this;
    this.collection = new BackdropCollection(backdrops);
    $('#body').html(this.containerTemplate());
    this.collection.each(function(model) {
      $('.cb-slideshow').append(that.itemTemplate(model.toJSON()));
    });
    return this;
  },
});