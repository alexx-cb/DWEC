let num = parseInt(prompt("Introduce un num"));

if(num>100){
    num = num - (num*0.15);
    document.write("Descuento aplicado, el nuevo precio es: " + num);
}