window.marker = null;

function initialize() {
  var map;
  var latitude = $("#map_canvas").attr("data-latitude");
  var longitude = $("#map_canvas").attr("data-longitude");
  var mapMarker = $("#map_canvas").attr("data-marker");
  var nottingham = new google.maps.LatLng(latitude, longitude);
  var style = [
    {
      featureType: "administrative",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "administrative.province",
      elementType: "all",
      stylers: [
        {
          visibility: "off",
        },
      ],
    },
    {
      featureType: "landscape",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: 65,
        },
        {
          visibility: "on",
        },
      ],
    },
    {
      featureType: "poi",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          lightness: "50",
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road",
      elementType: "all",
      stylers: [
        {
          saturation: "-100",
        },
      ],
    },
    {
      featureType: "road.highway",
      elementType: "all",
      stylers: [
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "road.arterial",
      elementType: "all",
      stylers: [
        {
          lightness: "30",
        },
      ],
    },
    {
      featureType: "road.local",
      elementType: "all",
      stylers: [
        {
          lightness: "40",
        },
      ],
    },
    {
      featureType: "transit",
      elementType: "all",
      stylers: [
        {
          saturation: -100,
        },
        {
          visibility: "simplified",
        },
      ],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [
        {
          hue: "#ffff00",
        },
        {
          lightness: -25,
        },
        {
          saturation: -97,
        },
      ],
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        {
          lightness: -25,
        },
        {
          saturation: -100,
        },
      ],
    },
  ];
  var mapOptions = {
    center: nottingham,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    backgroundColor: "#000",
    zoom: 15,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    scaleControl: false,
    streetViewControl: false,
    overviewMapControl: false,
    zoomControlOptions: {
      style: google.maps.ZoomControlStyle.LARGE,
    },
    gestureHandling: "none",
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
  var mapType = new google.maps.StyledMapType(style, {
    // name: "Grayscale"
  });
  // map.mapTypes.set("grey", mapType);
  // map.setMapTypeId("grey");
  // var marker_image = mapMarker;
  // var pinIcon = new google.maps.MarkerImage(
  //   marker_image,
  //   null,
  //   null,
  //   null,
  //   new google.maps.Size(30, 50)
  // );
  // marker = new google.maps.Marker({
  //   position: nottingham,
  //   map: map,
  //   // icon: pinIcon,
  //   title: "Airspace",
  // });
  // var circle = new google.maps.Circle({
  //   center: nottingham,
  //   map: map,
  //   // icon: pinIcon,
  //   // title: "Airspace",
  //   strokeColor: "#0000FF",
  //   strokeOpacity: 0.5,
  //   strokeWeight: 2,
  //   fillColor: "#0000FF",
  //   fillOpacity: 0.1,
  //   map,
  //   radius: 400,
  // });
}
var map = document.getElementById("map_canvas");
if (map != null) {
  google.maps.event.addDomListener(window, "load", initialize);
}
