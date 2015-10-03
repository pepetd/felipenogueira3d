var ExternalLinksView = Backbone.View.extend({

  initialize: function() {
    $(document.links).filter(function() {
      return this.hostname && this.hostname !== location.hostname;
    }).attr('target', '_blank');
  }

});

$('body').each(function() {
  var externalLinksView = new ExternalLinksView({ el: this });
});
