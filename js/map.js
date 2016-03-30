//init the google map in the webpage         
var map, infowindow;

function initMap() {
    var pos = {lat: 39.768597, lng: -86.162682};

    //create the google map
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 10,
    });

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        pos = {lat: position.coords.latitude, lng: position.coords.longitude};
        map.setCenter(pos); 
        });
    } else {
    // Browser doesn't support Geolocation will use indianapolis as center
    
    }

    infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
    position: pos,
    map: map,
    icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 4
    }
    }); 

    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pos,
        radius: 10000,
        type: ['grocery_or_supermarket']
    }, callback);
}


function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


