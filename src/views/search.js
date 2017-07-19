var SearchView = Backbone.View.extend({
  
  events: {
    'submit .search-bar form-inline': 'searchVideo',
    'click .btn': 'searchVideo'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },
  
  searchVideo: function() {
    var text = //$(document).findElementbyId('form-control').val();
    console.log(text);
    this.collection.search(text);
    //clear text fields
  },

  template: templateURL('src/templates/search.html')

});
