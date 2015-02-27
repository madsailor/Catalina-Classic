var directionsDisplay;
var directionsService = new google.maps.DirectionsService();

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    scrollwheel: false,
    zoom: 15,
    center: new google.maps.LatLng(33.756, -118.19287)
  };
  var map = new google.maps.Map(document.getElementById('map-canvas'),
      mapOptions);
  map.setMapTypeId(google.maps.MapTypeId.ROADMAP);
  directionsDisplay.setMap(map);
  directionsDisplay.setPanel(document.getElementById('directions-panel'));
  var marker = new google.maps.Marker({
      position: new google.maps.LatLng(33.753314, -118.19287),
      map: map,
      title: 'Catalina Classic Cruises!'});
  var input = document.getElementById('input');
  input.style.display = 'block';
  map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
}

function calcRoute() {
  var start = document.getElementById('start').value;
  var request = {
    origin: start,
    destination: '1046 Queens Highway, Long Beach, CA, 90802',
    travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);
