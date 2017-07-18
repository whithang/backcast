var Video = Backbone.Model.extend({

  initialize: function(video) {
    // override youtube's complex id field
    this.set('id', video.id.videoId);
    this.set('title', video.snippet.title);
    this.set('description', video.snippet.description);
    this.set('thumbnail', video.snippet.thumbnails.default.url);
    
  },

  select: function() {
    this.trigger('select', this);
  }

});

/* input example:

{
    'kind': 'youtube#searchResult',
    'etag': 'm2yskBQFythfE4irbTIeOgYYfBU/fb8yVdyj75cLQhkuYlAvqUCq69A',
    'id': {
      'kind': 'youtube#video',
      'videoId': '4WJLlWpzpP0'
    },
    'snippet': {
      'publishedAt': '2015-02-27T05:29:08.000Z',
      'channelId': 'UC8Szh5ZJeGFBWyqKyTCVPpA',
      'title': 'Learn Backbone.js Tutorial by Building an App! (1/6) - Models and Collections',
      'description': 'Learn how to create a blogroll app using BackboneJS. In this video, we talk about how to use models and collections. Github source code: This part (clientside) ...',
      'thumbnails': {
        'default': {
          'url': 'https://i.ytimg.com/vi/4WJLlWpzpP0/default.jpg',
          'width': 120,
          'height': 90
        },
        'medium': {
          'url': 'https://i.ytimg.com/vi/4WJLlWpzpP0/mqdefault.jpg',
          'width': 320,
          'height': 180
        },
        'high': {
          'url': 'https://i.ytimg.com/vi/4WJLlWpzpP0/hqdefault.jpg',
          'width': 480,
          'height': 360
        }
      },
      'channelTitle': 'Learn Coding Tutorials',
      'liveBroadcastContent': 'none'
    }
  }

*/