

var link = document.querySelector(".booking-search-btn");
var popup = document.querySelector(".form-booking");

link.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("form-booking-show");
  });

function initialize() {
var mapOptions = {
  zoom: 9,
  center: new google.maps.LatLng(34.8437908,-111.7855004)
}
var map = new google.maps.Map(document.getElementById("map-canvas"),
                              mapOptions);
var myLatLng = new google.maps.LatLng(34.8437908,-111.7855004);
var beachMarker = new google.maps.Marker({
  position: myLatLng,
  map: map,
});
}

google.maps.event.addDomListener(window, 'load', initialize);
