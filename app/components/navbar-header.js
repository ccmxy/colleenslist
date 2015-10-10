import Ember from 'ember';

export default Ember.Component.extend({
  model() {
     return this.store.findAll('category');
   },
   actions: {
     categorySelected: function(){
       debugger;
       var e = document.getElementById("categories");
       var catId = e.options[e.selectedIndex].value;
       this.sendAction('goToCategory', catId);
       //Note: Cannot transitionTo directly from a component,
       // hence sending the action.
     }
   }
});
