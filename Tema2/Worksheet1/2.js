let fechaHoy = new Date();
document.write("Fecha actual: "+ fechaHoy.getDate()+ "<br>");

let fecha85 = new Date();
fecha85.setDate(fecha85.getDate()+85);
document.write(fecha85.toLocaleString() + "<br>");

let fecha187 = new Date();
fecha187.setDate(fecha187.getDate()-187);
document.write(fecha187.toLocaleString() +"<br>");

fecha85.setFullYear(fecha85.getFullYear()+2);
document.write(fecha85.toLocaleString()+"<br>");

fecha187.setHours(fecha187.getHours()-24);
document.write(fecha187.toLocaleString()+"<br>");

let fechaResto = fecha85.toLocaleString() - fecha187.toLocaleString();
document.write(fechaResto.toLocaleString())