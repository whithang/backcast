var Videos = Backbone.Collection.extend({

  model: Video,
  
  search: function(text) {
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: {
        maxResults: '5',
        part: 'snippet',
        query: text, //change me!! 
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY
      },
      dataType: 'json',
      success: function (data) {
        console.log('success!' + JSON.stringify(data));
      },
      
      error: function (data) {
        console.log('Nope!' + JSON.stringify(data));
      },
    });
  }

});
