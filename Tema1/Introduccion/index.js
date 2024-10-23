document.write("esto se escribe desde JS");
document.write("<p>esto es otra sentencia</p>");

variable = 0;
document.write("<br>" + variable);

let mivariable = 1; // variable local
var v = 2; // variable general
const constante = 6; // constante

NaN // operacion matematica no valida

if(true){
    let localBloque = 3; // Existe solo dentro de los bloques
}

// 'prompt'Pide al usuario y lo almacena en 'valor' como un String -- 'ParseInt' lo convierte en numero
let valor = parseInt(prompt("dame un numero"));
valor = valor + 1;
document.write(valor);
// Lo escribe en la consola del navegador
console.log(valor);

