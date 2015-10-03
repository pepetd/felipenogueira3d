var VideoView = Backbone.View.extend({

  initialize: function() {
    this.$videos = $('iframe[src*="https://player.vimeo.com/"], iframe[src*="https://www.youtube.com/"]');
    this.wrap();
    $('.VideoEmbed').fitVids();
  },

  wrap: function() {
    this.$videos.each(function() {
      $(this).wrap('<div class="VideoEmbed"></div>');
    });
  }

});

$('body').each(function() {
  var videoView = new VideoView({ el: this });
});
