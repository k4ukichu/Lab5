// Creating map and setting zoom
var map = L.map('map').setView([51.8496, -114.0715], 13);
//OSM Layer
mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
L.tileLayer('https://api.mapbox.com/styles/v1/k4kichu/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiazR1a2ljaHUiLCJhIjoiY2t6bmFzbGtpNHZ6YjJ2cHF6MWcwaTE2NiJ9.AtpCM4KcsvFFJYpr1bWtig', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
}).addTo(map);;

//Creating a feature group to store the layers
var drawnItems = new L.FeatureGroup();
map.addLayer(drawnItems);

 // Initialise the draw control
 var drawControl = new L.Control.Draw({
 edit: {
featureGroup: drawnItems
}

});
map.addControl(drawControl);
map.on("draw:created", function (e) {
var type = e.layerType,
layer = e.layer;
if (type === 'marker') {
 layer.bindPopup('You dropped a mark!');
}
drawnItems.addLayer(layer);
 });

// Make a geojson layer that will store the simplified Lines
var createdLines = new L.geoJSON().addTo(map);
var Polyline, simplified;

//Saving the layer after the line has been drawn
map.on('draw:created', function(e) {
 let type = e.layerType, layer = e.layer;
Polyline - e.layer.toGeoJSON();
drawnItems.addLayer(layer);
});
