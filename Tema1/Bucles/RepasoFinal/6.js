let a = parseInt(prompt("Introduce un numero menor"));
let b = parseInt(prompt("Introduce un numero maximo"));
let suma =0;

let min =0;
let max=0;

if(a<b){
    min=a;
    max=b;
}else{
    max=a;
    min=b;
}

for(let i =min;i<=max;i++){
    if(i%2 ===0){
        suma +=i;
    }
}
document.write("La suma de todos los numeros pares entre: " + a + " y " + b + " = " + suma);