var Backdrop = Backbone.Model.extend({});
var Link = Backbone.Model.extend({});

var BackdropCollection = Backbone.Collection.extend({
  model: Backdrop
});
var LinkCollection = Backbone.Collection.extend({
  model: Link
});