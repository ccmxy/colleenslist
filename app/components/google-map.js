export default Ember.Component.extend({
  map: Ember.inject.service('google-map'),

  actions: {
    showMap(model) {
      $(".map-display").show();
      var container = this.$('.map-display')[0];
      var options = {
        center: this.get('map').center(model.get('latitude'), model.get('longitude')),
        zoom: 15
      };
      //this.get('map').findMap(container, options);

      //NEW! (With above line for no marker)
      var myLatlng = new google.maps.LatLng(model.get('latitude'),model.get('longitude'));
      var marker = new google.maps.Marker({
        position: myLatlng,
        title: model.get('title')
      });
      var theMap = this.get('map').findMap(container, options);
      marker.setMap(theMap);
    }
  }
});
