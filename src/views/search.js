var SearchView = Backbone.View.extend({
  
  el: '.search',
  
  initialize: function() {
    this.render();
    // what should this do on startup?
    //setup listener for click or submits in field 
    // possible set defualt initial search text
    
  },

  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/search.html')

});
