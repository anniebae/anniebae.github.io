var Contact = Backbone.View.extend({
  el: '.contact-wrapper',
  containerTemplate: _.template($('#contact-container-template').html()),
  itemTemplate: _.template($('#contact-item-template').html()),
  initialize: function(){
    this.render();
  },
  render: function() {
    var that = this;
    this.collection = new LinkCollection(links);
    $('#body').html(this.containerTemplate());
    this.collection.each(function(model){
      if (model.get('type') === 'contact') {
        $('.row-contact').append(that.itemTemplate(model.toJSON()));
      }
    });
    return this;
  },
});
