var VideoListView = Backbone.View.extend({
  initialize: function() {
    //should initialize AFTER a search has been responded to by youTube
    //pass first video in search return to init for video player
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
