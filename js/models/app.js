var Backdrop = Backbone.Model.extend({});
var Link = Backbone.Model.extend({});
// collections looking to take in an array of objects. ALWAYS an array.
var BackdropCollection = Backbone.Collection.extend({
  model: Backdrop
});
var LinkCollection = Backbone.Collection.extend({
  model: Link
});
