$("#delete").attr("disabled", true);
$("#simplify").attr("disabled", true);
$('[data-toggle="tooltip"]').tooltip();

var map = L.map('map').setView([51.0447, -114.0719], 12);
map.addControl(new L.Control.Fullscreen());

L.tileLayer('https://api.mapbox.com/styles/v1/k4kichu/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);;

var myLayer = L.geoJSON();
var geojsonFeature;
var coords = [];

function drawline () {

map.dragging.disable();
map.addEventListener('mousedown', function(e) {

$("#draw").attr("disabled", true);
map.addEventListener('mousemove', function(ev) {

var lat = ev.latlng.lat;
var lng =ev.lating.lng;
var coord = [lng, lat];
coords.push(coord);

geojsonFeature = {
"type": "Feature",
"geometry": {
"type": "LineString",
"coordinates": coords
}
};
myLayer.addData(geojsanFeature);
myLayer.addTo(map);
});
});
map.on('mouseup', function(e) {
map.removeEventListener('mousemove');
map.removeEventListener('mousedown');
map.dragging.enable();
});

$('#delete').removeAttr('disabled');
$('#simplify').removeAttr('disabled');
}
function check (){
var geojson = turf.multilineString([coords]);
var options= {tolerance: 0.01, highQuality: false};
var simplified = turf.simplify(geojson, options);
map.removeLayer(myLayer);
myLayer.clearLayers();
mylayer.addData(simplified);
myLayer. addTo(map);
coords=[];
$("#simplify").attr("disabled", true);
}

function deleteline (){

 map.removeLayer(myLayer);
myLayer.clearLayers();
 coords=[];
$('#draw').removeAttr('disabled');
 $("#simplify").attr("disabled", true);

$("#delete").attr("disabled", true);
 }