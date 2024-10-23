let t = parseFloat(prompt("Introduce una temperatura en celsius"));
let f;
f = (t*9/5) + 32;

document.write("Los " + t + " ºC son " + f + " ºF");

t= 0;
f=0;

f = parseFloat(prompt("Introduce una temperatura en fahrenheit"))

t= (f-32)*5/9;
document.write("<br>Los " + f + " ºF " + t + " ºC");
