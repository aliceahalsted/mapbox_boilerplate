
import mapboxgl, { LngLatBounds } from 'mapbox-gl';

// TO MAKE THE MAP APPEAR YOU MUST ADD YOUR ACCESS TOKEN FROM
// https://account.mapbox.com
mapboxgl.accessToken = 'pk.eyJ1IjoiYXplbGVzbnkiLCJhIjoiY2w0dnk1c3FwMWs5aTNjbzA3dHVhd3h4eiJ9.Z_zxzk4KekHviOQw_n79ew';
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: [-83.0, 39.9], // starting position [lng, lat]
    zoom: 9 // starting zoom
});


// Fly to user locations if they make it available
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(position => {
//         map.flyTo({
//             center: [position.coords.longitude, position.coords.latitude]
//         })
//     })
// } 

// Add geolocate control to the map.
map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
);

//Add navigation controls
map.addControl(new mapboxgl.NavigationControl());

//Add fullscreen controls
map.addControl(new mapboxgl.FullscreenControl());


//Local Files
const boatLaunchPoints ='../data/BoatLaunchPoints.geojson'

map.on('load', () =>{
//Add GeoJSON point
//Local file vs external file
    map.addSource('points',{
        type: 'geojson',
        data: './data/BoatLaunchPoints.geojson'
    })
    map.addLayer({
        id: 'points',
        type: 'circle',
        source: 'points',
        paint: {
            'circle-radius': 4,
            'circle-color': 'red'
        }
    })
//Add GeoJSON lines

//Add GeoJSON polyons

//Add vector tile

   
})