//init the google map in the webpage         
var map, service, pos, infowindow;
var place_id_list = new Array;
var store_info_list = new Array;

function initMap() {

//    var directionsDisplay = new google.maps.DirectionsRenderer;
//    var directionsService = new google.maps.DirectionsService;
    pos = {lat: 39.765, lng: -86.16};

    //create the google map
    map = new google.maps.Map(document.getElementById("map"), {
        center: pos,
        zoom: 12
    });

    infowindow = new google.maps.InfoWindow();

//    directionsDisplay.setMap(map);
//    calculateAndDisplayRoute(directionsService, directionsDisplay);

//    var onChangeHandler = function() {
//        calculateAndDisplayRoute(directionsService, directionsDisplay);
//    };
//    destination.addEventListener('change', onChangeHandler);

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
        location: pos,
        radius: 10000,
        type: 'grocery_or_supermarket'
    }, callback);
}


function callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            service.getDetails({
                placeId: results[i].place_id
            }, function(place, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
//                    var store_info = {
//                        place_id: place.id,
//                        name: place.name,
//                        address: place.formatted_address,
//                        phone: place.formatted_phone_number,
//                        rating: place.rating,
//                        map_url: place.url,
//                       website: place.website,
//                        openhour: place.opening_hours.weekday_text
//                    }
//                    store_info_list.push(store_info);
                    createMarkerAndDetailedInfo(place);
                } else {
                    console.log('Place details request failed due to ' + status);
                }
            });
        }
    }
}


function createMarkerAndDetailedInfo(place) {
    var placeLoc = place.geometry.location;
    var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location
    });
    google.maps.event.addListener(marker, 'click', function() {    
        var if_open_now;
        if (place.opening_hours.open_now == true) {
            if_open_now = 'Yes'
        } else {
            if_open_now = 'No'
        }

        infowindow.setContent('<div><strong>' + place.name + '  ' 
            + '(Open now: ' + if_open_now + ')</strong><br>' + place.formatted_address);
        infowindow.open(map, this);

        document.getElementById("store-name").innerHTML = place.name
    });
}


function calculateAndDisplayRoute(directionsService, directionsDisplay) {
    directionsService.route({
        origin: pos,
        destination: {lat: 39.86, lng: -87.16},
        travelMode: google.maps.TravelMode.DRIVING
    }, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
    } else {
        window.alert('Directions request failed due to ' + status);
    }
  });
}
