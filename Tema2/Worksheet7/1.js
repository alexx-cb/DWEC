var latitud =0 ;
var longitud =0;
function posicion(pos){
    console.log(pos.coords.latitude);
    console.log(pos.coords.longitude);
    latitud = pos.coords.latitude;
    longitud = pos.coords.longitude;
}

// 1.1 y 1.2
if(!navigator.geolocation){
    console.log("No se puede acceder a la geolocalizacion");
}else{
    console.log("Soporta geolocalizacion");
    navigator.geolocation.getCurrentPosition(posicion, funcionParaError);
}

//1.3
//(error) --> Almacena el error que se ha producido
function funcionParaError(error){
    console.log("Se ha producido un error");
    console.log("Error numero "+ error.code);
    //Muestra el error
    console.log(error.message);
}


//1.4
//navigator.geolocation.watchPosition(posicion, funcionParaError);

//1.5
var distancia = 0;

var lat1 = latitud;
var long1 = longitud;

navigator.geolocation.watchPosition(posicion, funcionParaError);

var lat2 = latitud;
var long2 = longitud;

distancia += Math.acos (Math.sin (lat1) * Math.sin (lat2) + Math.cos (lat1) * Math.cos (lat2) * Math.cos (long2-long1)) * 6371;

console.log(distancia);