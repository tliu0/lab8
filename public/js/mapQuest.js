function initMap() {
	// add your code here
	L.mapquest.key = "24u5oO0fO9UOTRd7GWiGYl5QDVpKIhiy";

	// 'map' refers to a <div> element with the ID map
	var map = L.mapquest.map('map', {
		center: [32.87880328050148, -117.23591208457947],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.87880328050148, -117.23591208457947]).addTo(map);
}