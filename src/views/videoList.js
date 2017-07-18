var VideoListView = Backbone.View.extend({
  el: '.list',
  
  initialize: function() {
    //should initialize AFTER a search has been responded to by youTube
    //pass first video in search return to init for video player
    this.render();
    //collection: this.videos;
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this);
    debugger;
    //loop on the collection for below:
    this.videos.models.forEach(function(video) {
    //   var videoEntry = new VideoListEntryView(video);
    //   this.$el.find('.video-list').append(videoEntry);
    });
    
    
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
