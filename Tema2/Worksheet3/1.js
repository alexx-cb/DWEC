// a)

function inviertePalabra(cad_arg){
    for(i=cad_arg.length-1;i>=0;i--){
      document.write(cad_arg[i]);
    }
}

inviertePalabra("hola");
document.write("<br>");

//b)
function invierteCadena(cad_arg){
    let palabraInvertida ="";
    let cadena = cad_arg.split(' ');
    for(i=0;i<=cadena.length-1;i++){
        palabraInvertida = inviertePalabra(cadena[i]+" ");
    }
    return palabraInvertida;
}

invierteCadena("Fernando Alonso");
document.write("<br>");

//c)
function encuentraPalabraMasLarga(cad_arg){
    let cadena = cad_arg.split(' ');
    let suma =0
    for(let i = 0 ; i<=cadena.length;i++){
        let palabra = cadena[i];
        for(let j =0;j<palabra.length;i++){
            suma += suma;
        }
    }
}
