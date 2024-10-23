let num;
let prueba;

num = parseInt(prompt("Introduce el numero a adivinar"));


do{

    prueba = parseInt(prompt("Introduce un numero"));
    if(prueba<num){
        console.log("El numero es menor");
    }else if(prueba>num){
        console.log("El numero es mayor");
    }else{
        document.write("Has acertado");
    }

}while(prueba!= num);