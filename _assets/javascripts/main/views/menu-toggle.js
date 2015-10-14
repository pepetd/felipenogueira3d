var MenuToggleView = Backbone.View.extend({

  initialize: function() {
    _.bindAll(this, 'toggle');

    this.$button = $('#navigation-toggle');
    this.$links = $('#navigation-links');
    this.$social = $('#social-links');

    this.bindEvents();
  },

  bindEvents: function() {
    this.$button.on('click', this.toggle);
  },

  toggle: function() {
    if(!this.$button.hasClass('active') && !this.$links.hasClass('active')) {
      this.$button.addClass('active');
      this.$links.addClass('active');
      this.$social.addClass('active');
    } else {
      this.$button.removeClass('active');
      this.$links.removeClass('active');
      this.$social.removeClass('active');
    }
  }

});

$('body').each(function() {
  var menuToggleView = new MenuToggleView({ el: this });
});
