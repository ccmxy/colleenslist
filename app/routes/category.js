import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('category', params.category_id);
  },
  actions: {
    save(params) {
      debugger;
      var newListing = this.store.createRecord('listing', params);
      var category = params.category;
      newListing.save().then(function() {
        return category.save();
      });
     //this.transitionTo(('/:question_id', params.question);
    },
  }
});
