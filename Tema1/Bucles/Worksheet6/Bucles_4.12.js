let celdas = parseInt(prompt("Introduce el número de celdas"));
let alto = parseInt(prompt("Introduce el alto de las celdas en px"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas en px"));
let color = 0;

document.write("<table border='2' cellspacing='2' bgcolor='white' width='" + (ancho * celdas) + "'>");
document.write("<tr height='" + alto + "'>");  // Se crea solo una fila

for (let i = 0; i < celdas; i++) {
    color = i % 2 === 0 ? 'white' : 'black';  // Alterna entre blanco y negro para cada celda
    document.write("<td width='" + ancho + "' bgcolor='" + color + "'></td>");
}

document.write("</tr>");
document.write("</table>");