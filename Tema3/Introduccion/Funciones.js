function imprimeEnConsola(error){
    console.log(error);
}

function orden(letraA, letraB){
    //let resultado =0;
    if(letraA>letraB){
        return 1;
        //resultado =1;
    }else if(letraB> letraA){
        return -1;
        //resultado =-1;
    }else{
        return 0;
        //resultado =0;
    }

    //return resultado
    
}

var resultado = orden("jose" , "francisco");

//Recursivas

function recursiva(n){

    if(n>0){
        recursiva(n-1);
    }
    console.log("acaba la funcion");
}

recursiva(4);


function factorial(n){

    if(n==1){
        return 1;
    }else{
        return n*factorial(n-1);
    }

}


//forEach:
let nombre = ["jose","rosa","paco"];
function pintaNombres(n) {
    console.log(n);
}

nombre.forEach(pintaNombres);


let numeros = [10,2,3,543,2,1,34];


console.log (numeros.sort((num1,num2)=>num1-num2));



// Funciones Arrow

setInterval(()=>console.log("sdfsadf"),1000);

(a,b)=> a>b; //devuelve true si se cumple a>b

a = [1,2,5,6,47];

//Filtra por cada valor del array si numero(array[i]) es mayor q 5
// b = [5,6,47];
b= a.filter(numero=>numero>=5);


