//Function to filter markers based on selected criteria
function applyFilters() {
  var category = document.getElementById("category-select").value;

//Clear existing markers from the map
  map.eachLayer(function(layer) {
    if (layer instanceof L.Marker) {
      map.removeLayer(layer);
    }
  });

//Filter the markers based on selected criteria and add them to the map
  markers.forEach(function(marker) {
    if ((category === "" || marker.category === category) && marker.rating >= minRating) {
      L.marker(marker.latlng).addTo(map).bindPopup(marker.name);
    }
  });
}

//Apply filters whenever a filter value changes
document.getElementById("category-select").addEventListener("change", applyFilters);