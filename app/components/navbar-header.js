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
       //I have verified that catId contains the appropriate ID at this point.

       //Where the error happens:
    //  this.transitionTo('/category/' + catId);
      //this.transitionTo(('/:question_id', params.question);
	     this.transitionTo({path:'/category/:category_id'}, catId);
     }
   }
});
