var VideoListEntryView = Backbone.View.extend({
  el: '.video-list',
  
  initialize: function() {
    this.render();

  },

  render: function() {
    debugger
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

