mapboxgl.accessToken = 'pk.eyJ1IjoieWFzaGFzd2EyNjIiLCJhIjoiY2tvYjNrYnZ0MDZhdTJvcDNnZnMyc3A1YyJ9.0-sgo9sHdldHF77hzQl-uw';
navigator.geolocation.getCurrentPosition(success, error,{enableHighAccuracy:true});//three parameters:2 functions and 1 object of options

function success(position){
    console.log(position);
    setupmap([position.coords.longitude,position.coords.latitude]);
}

function error(){
    console.log("Error");
}


function setupmap(arr){
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:arr,
zoom:15
});
const nav= new mapboxgl.NavigationControl();
map.addControl(nav);

var directions = new MapboxDirections({
    accessToken: 'pk.eyJ1IjoieWFzaGFzd2EyNjIiLCJhIjoiY2tvYjNrYnZ0MDZhdTJvcDNnZnMyc3A1YyJ9.0-sgo9sHdldHF77hzQl-uw',
    unit: 'metric',
    profile: 'mapbox/cycling'
  });
  

  map.addControl(directions,"top-left");
}
