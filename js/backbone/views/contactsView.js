var ContactsView = Backbone.View.extend({
  el: "#contacts",
  contactsTemplate: _.template($("#contacts-template").html()),
  initialize: function() {
    this.render();
  },
  render: function() {
    this.$el.html(this.contactsTemplate());
  }
});