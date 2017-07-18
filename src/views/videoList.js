var VideoListView = Backbone.View.extend({
  el: '.list',
  
  initialize: function() {
    //should initialize AFTER a search has been responded to by youTube
    //pass first video in search return to init for video player
    this.render();
    //collection: this.videos;
    //setup on change listener to re-render if collection changes
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    //loop on the collection for below:
    //this.videos.models.forEach(function(video) {
    //colleciton passed in as a new porperty called 'collection'  so this.collection.forEach
    this.collection.forEach((video) => {
      var videoEntry = new VideoListEntryView(video);
      this.$el.find('.video-list').append(videoEntry.$el);
      //for each model in the collection
        //create new viewListEntryView passing the model
        //append the new listEntry's html to the ListView
    });
    //   var videoEntry = new VideoListEntryView(video);
    //   this.$el.find('.video-list').append(videoEntry.$el);
    //});
    
    
    return this.$el;
  },

  template: templateURL('src/templates/videoList.html')

});
