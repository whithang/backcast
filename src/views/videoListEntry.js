var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  //possibly should be div,  as that's the header for the list HTML
  
  initialize: function() {
    this.render();

  },

  render: function() {
  
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

