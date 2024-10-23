let celdas = parseInt(prompt("Introduce el numero de celdas"));
let alto = parseInt(prompt("Introduce el alto de las celdas en px"));
let ancho = parseInt(prompt("Introduce el ancho de las celdas en px"));

document.write("<table border = '0' cellspacing = '2' bgcolor = 'white' width = '" +ancho +"'  >");
document.write("<tr bgcolor = ” white” height = '"+alto+"' >");

for(let i = 0; i<celdas;i++){
    document.write("<td width = ”"+ancho+"” > < /td >");
}
document.write("</tr>");
document.write("</table>");