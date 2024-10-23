var a1 =0;
var a2 =0;
var a3 =0;
var a4 =0;
var a5 =0;
var a6 =0;

function lanzar(n){
    
    for(let i =0;i<6000;i++){
    let resultado = (Math.random()*6)+1;
        resultado = Math.trunc(resultado);
        if(resultado==1){
            a1++;
        }else if(resultado ==2){
            a2++;
        }else if(resultado ==3){
            a3++;
        }else if(resultado ==4){
            a4++;
        }else if(resultado ==5){
            a5++;
        }else if(resultado ==6){
            a6++;
        }
    }
    return "El numero 1 ha salido: " + a1 + " El numero 2 ha salido: " + a2 + " El numero 3 ha salido: " + a3+ " El numero 4 ha salido: " + a4 +
    + " El numero 5 ha salido: " + a5 + " El numero 6 ha salido: " + a6;

}

console.log(lanzar());

