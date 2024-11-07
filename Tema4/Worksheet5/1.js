function mayus(e){
    let expresion = /[A-Z]/;
    return expresion.test(e);
}
function caracteres(e){
    let expresion = /[!@#$%^&]+/;
    return expresion.test(e);
}
function correo(e){
    let expresion = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return expresion.test(e);
}
function tarjeta(e){
    let expresion = /[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})/;
    return expresion.test(e);
}
function longitud(e){
    let expresion = /^.{8,}$/;
    return expresion.test(e);
}
function digito(e){
    let expresion = /\d/;
    return expresion.test(e);
}