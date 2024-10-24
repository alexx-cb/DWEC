document.write("<table border='1px' id='1' cellspacing='2' bgcolor='white'>");

for(let i =0;i<100;i++){
    document.write("<tr height='2px'>");
    for(let j =0; j<100;j++){
        document.write("<td width='50px' height='10px' border ='1px'></td>");
    }
    document.write("</tr>");
}

document.write("</table>");

const tabla = document.getElementById("1");


