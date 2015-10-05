import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    listingFormShow() {
      this.set('addNewListing', true);
    },
    save() {
      var params = {
        //Where you put in the category to send back:
        category: this.get('category'),
        //Other details:
        title: this.get('title'),
        details: this.get('details'),
        image: this.get('image'),
      };
      this.set('addNewListing', false),
      this.sendAction('save', params);
    }
  }
});
