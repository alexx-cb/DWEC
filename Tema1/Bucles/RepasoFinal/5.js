let num = prompt("Introduce un num");
let valido=false;
let suma =0;
/*
if(isNaN(num)){
    document.write("Me tienes que dar un numro");
}else{
    let suma =0;
    for(let i =0;i<num.length;i++){
        suma += parseInt(num[i]);
    }
    document.write("La suma de los digitos es: " + suma);
}
*/
for(let i =0;i<num.length && !valido;i++){
    if(isNaN(parseInt(num[i]))){
        document.write("no es un numero");
        valido = true;
    }else{
        suma += parseInt(num[i]);
        document.write(suma);
    }

}