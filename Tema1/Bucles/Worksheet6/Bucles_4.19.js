let celdas = 8;
let dimension = parseInt(prompt("Introduce el alto de las celdas en px"));
let color = 0;

document.write("<table border='2' cellspacing='2' bgcolor='white' width='" + (dimension* celdas) + "'>");

for (let i = 0; i < celdas; i++) {
    document.write("<tr height='" + dimension + "'>");
    for (let j = 0; j < celdas; j++) {
        color = (i + j) % 2 === 0 ? 'white' : 'black'; // Alternar entre blanco y negro
        document.write("<td width='" + dimension + "' bgcolor='" + color + "'></td>");
    }
    document.write("</tr>");
}

document.write("</table>");