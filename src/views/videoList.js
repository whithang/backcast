var VideoListView = Backbone.View.extend({
  
  initialize: function() {
    //pass first video in search return to init for video player
    //this.render();
    this.collection.on('sync', this.render, this);

    //setup on change listener to re-render if collection changes
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //_.each on the collection call render video method
    this.collection.each(this.renderVideo, this);
  
    
    
    return this;
  },
  
  renderVideo: function(video) {
    this.$('.video-list').append(
      new VideoListEntryView({
        model: video
      }).render().el);
  },

  template: templateURL('src/templates/videoList.html')

});
