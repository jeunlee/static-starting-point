function initialize_gmaps() {
    // initialize new google maps LatLng object
    var myLatlng = new google.maps.LatLng(40.705189,-74.009209);
    // set the map options hash

    var styleArr = [{
        featureType: 'landscape',
        stylers: [{ saturation: -100 }, { lightness: 60 }]
    }, {
        featureType: 'road.local',
        stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
    }, {
        featureType: 'transit',
        stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
    }, {
        featureType: 'administrative.province',
        stylers: [{ visibility: 'off' }]
    }, {
        featureType: 'water',
        stylers: [{ visibility: 'on' }, { lightness: 30 }, {color : "#46bcec"}]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
    }, {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{ visibility: 'off' }]
    }, {
        featureType: 'poi.park',
        elementType: 'geometry.fill',
        stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
    }];

    var mapOptions = {
        center: myLatlng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: styleArr
    };

    // get the maps div's HTML obj
    var map_canvas_obj = document.getElementById("map-canvas");
    // initialize a new Google Map with the options
    var map = new google.maps.Map(map_canvas_obj, mapOptions);
    // Add the marker to the map

var markerArray = [
    new google.maps.Marker({
        position: new google.maps.LatLng(40.705698, -74.009500),
        title:"Restaurant",
        icon : "icons/food.svg",
        opacity : 0.8
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.706702, -74.009731),
        title:"Hello World!",
        icon : "icons/natural-feature"
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.7040, -74.0137),
        title:"Hello World!",
        icon : "icons/natural-feature.svg"
    }),

     new google.maps.Marker({
        position: new google.maps.LatLng(40.705095, -74.008126),
        title:"Hello World!",
        icon : "icons/food.svg"//hotel
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.705095, -74.008126),
        title:"Hello World!",
        icon:"icons/lodging.svg"//hotel
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.7099, -74.0124),
        title : "Hello world!",
        icon:"icons/natural-feature.svg"//hotel
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.706935, -74.004467),
        title:"Hello World!",
        icon:"icons/food.svg"
    }),//trinity church

    new google.maps.Marker({
        position: new google.maps.LatLng(40.7060, -74.0186),
        title : "Hello world!",
        icon:"icons/natural-feature.svg"//stock exchange
    }),

    new google.maps.Marker({
        position: new google.maps.LatLng(40.707437, -74.010245),
        title:"Hello World!",
        icon:"icons/lodging.svg"//liberty hall
    })

];

function toggleBounce() {
    if (this.getAnimation() !== null) {
        this.setAnimation(null);
    } else {
        this.setAnimation(google.maps.Animation.BOUNCE);
    }
 }
    // Add the marker to the map by calling setMap()
for (var i = 0; i < markerArray.length; i++){
    markerArray[i].addListener('click', toggleBounce);
    markerArray[i].setMap(map);
   }
}

$(document).ready(function() {
    initialize_gmaps();
});