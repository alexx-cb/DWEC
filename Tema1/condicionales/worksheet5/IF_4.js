let hermanos = parseInt(prompt("Introduce el numero de hermanos"));
let cantidad = parseInt(prompt("Introduce una cantidad"));

if(hermanos >= 3 ){
    cantidad = cantidad - cantidad*0.15;
    document.write("el precio final es de "+ cantidad);
}else if(hermanos >0 && hermanos <3){
    cantidad = cantidad - cantidad*0.05;
    document.write("el precio final es de "+ cantidad);
}else {
    document.write("el precio final es de "+ cantidad);
}