let celdas = parseInt(prompt("Introduce el número de celdas"));
let alto = parseInt(prompt("Introduce el alto de las celdas en px"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas en px"));
let color = 1;
let suma = 1;

document.write("<table border='2' cellspacing='2' bgcolor='white' width='" + (ancho * celdas) + "'>");
document.write("<tr height='" + alto + "'>");

while (suma <= celdas) {
    if (color % 2 === 0) {
        document.write("<td width='" + ancho + "' bgcolor='black'></td>");
    } else {
        document.write("<td width='" + ancho + "' bgcolor='white'></td>");
    }
    color++;
    suma++;
}

document.write("</tr>");
document.write("</table>");