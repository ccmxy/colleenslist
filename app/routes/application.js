import Ember from 'ember';

export default Ember.Route.extend({

  actions: {
    goToCategory(catId) {
      this.transitionTo('category', catId);
    }
  }

});
