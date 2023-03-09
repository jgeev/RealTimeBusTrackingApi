async function run(map) {
  // get bus data
  const locations = await getBusLocations();
  var markers = [];
  console.log(new Date());
  console.log(locations);
  //here add the longitude and latitude to the constant marker
  for (i = 0; i < 5; i++) {
    markers.push(
      new mapboxgl.Markers()
        .setLngLat([
          locations[i].attributes.longitude,
          locations[i].attributes.latitude,
        ])
        .addTo(map)
    );
  }
  setTimeout(run, 15000);
}

// Request MTA bus location data from MBTA
async function getBusLocations() {
  const url = "https://api-v3.mbta.com/vehicles?filter[route]=1&include=trip";
  const response = await fetch(url);
  const json = await response.json();

  return json.data;
}
