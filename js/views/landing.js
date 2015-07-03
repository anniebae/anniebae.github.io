var Landing = Backbone.View.extend({
  el: '.landing-page',
  containerTemplate: _.template($('#landing-container-template').html()),
  itemTemplate: _.template($('#landing-item-template').html()),
  linkTemplate: _.template($('#social-link-template').html()),
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
    var linkCollection = new LinkCollection(links);
    linkCollection.each(function(model) {
      if (model.get('type') === 'social') {
        $('#social-media-ul').append(that.linkTemplate(model.toJSON()));
      }
    });
    return this;
  },
});