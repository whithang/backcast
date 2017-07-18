var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();
    this.videos = new Videos(exampleVideoData);
    //this.$el.append(SearchView.render())
  },


  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
