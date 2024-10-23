let num;
let suma =0;

for(i=0;i<10;i++){
    num=parseInt(prompt("Introduce 10 num"));
    document.write(num + " ");
    suma += num;
    document.write("<br>La suma de los numeros es: " + suma);
}