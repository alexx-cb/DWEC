let filas = parseInt(prompt("Introduce las filas"));
let columnas = parseInt(prompt("Introduce las columnas"));
let ancho = parseInt(prompt("Introduce el ancho"));
let alto = parseInt(prompt("Introduce el alto"));


ocument.write("<table border='2' cellspacing='2' bgcolor='white' width='" + (dimension* celdas) + "'>");
for(let i =0;i<filas;i++){
    document.write("<tr height='" + alto + "'>");
    for(let j=0; j<columnas;j++){
        document.write("<td width='" + ancho + "'></td>");
    }
    document.write("</tr>");
}
document.write("</table>");
