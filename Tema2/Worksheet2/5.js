let a= parseInt(prompt("Introduce el coeficiente de x^2"));
let b = parseInt(prompt("Introduce el coeficiente de la x"));
let c = parseInt(prompt("Introduce el numero independiente"));
let sol1;
let sol2;

sol1 = (-b+Math.sqrt((b*b) -4*a*c))/2*a;
document.write('Solucion 1: ' + sol1+ '<br>');

sol2 = (-b-Math.sqrt((b*b) -4*a*c))/2*a;
document.write('Solucion 2: ' + sol2);