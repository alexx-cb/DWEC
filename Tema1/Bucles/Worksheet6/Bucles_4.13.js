let celdas = parseInt(prompt("Introduce el numero de celdas"));
let alto = parseInt(prompt("Introduce el alto de las celdas en px"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas en px"));
let suma = 0;

document.write("<table border='2' cellspacing='2' bgcolor='white' width='" + (ancho * celdas) + "'>");
document.write("<tr height='" + alto + "'>");

while(suma<celdas){
    document.write("<td width = ”"+ancho+"” > </td>");
    suma++;
}

document.write("</tr>");
document.write("</table>");