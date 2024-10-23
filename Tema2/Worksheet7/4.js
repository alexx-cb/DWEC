let longitude, latitude, map, marker, route = [], line;

function actualizarMapa(pos) {
  [longitude, latitude] = [pos.coords.longitude, pos.coords.latitude];

  if (!map) {
    map = L.map('map').setView([latitude, longitude], 13);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap' }).addTo(map);
    marker = L.marker([latitude, longitude]).addTo(map);
    
  }
    line = L.polyline(route, { color: 'blue' }).addTo(map);
  marker.setLatLng([latitude, longitude]);
  route.push([latitude, longitude]);
  line.setLatLngs(route);
  map.setView([latitude, longitude], map.getZoom());
}

navigator.geolocation.watchPosition(actualizarMapa, 
  error => console.error("Error al obtener la ubicación: ", error), 
  { enableHighAccuracy: true, maximumAge: 0, timeout: 10000 }
);

navigator.geolocation.getCurrentPosition(actualizarMapa);