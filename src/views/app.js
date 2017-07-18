var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    this.render();
    
    var searchBar = new SearchView();
    this.$el.append(searchBar);

    var videoPlayer = new VideoPlayerView();
    this.$el.append(videoPlayer);
    
    this.videos = new Videos(exampleVideoData);
    //console.log(this.videos);

    
    var videoList = new VideoListView({collection: this.videos}); 
    
    this.$el.append(videoList);

    
    
  },


  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
