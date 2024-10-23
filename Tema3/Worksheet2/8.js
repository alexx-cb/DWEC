let dados = [0,0,0,0,0,0,0,0,0,0,0,0];

function lanzar(){

    for(let i =0;i<36000;i++){
        let aleatorio = (Math.random()*6)+1;
        aleatorio += (Math.random()*6)+1;
        aleatorio = Math.trunc(aleatorio);
        if(aleatorio==1){
            dados[0] +=1;
        }else if(aleatorio ==2){
            dados[1] +=1;
        }else if(aleatorio ==3){
            dados[2] +=1;
        }else if(aleatorio ==4){
            dados[3] +=1;
        }else if(aleatorio ==5){
            dados[4] +=1;
        }else if(aleatorio ==6){
            dados[5] +=1;
        }else if(aleatorio ==7){
            dados[6] +=1;
        }else if(aleatorio ==8){
            dados[7] +=1;
        }else if(aleatorio ==9){
            dados[8] +=1;
        }else if(aleatorio ==10){
            dados[9] +=1;
        }else if(aleatorio ==11){
            dados[10] +=1;
        }else if(aleatorio ==12){
            dados[11] +=1;
        }
    }

    return "El numero 1 ha salido: " + dados[0] + " El numero 2 ha salido: " + dados[1] + 
    " El numero 3 ha salido: " + dados[2]+ " El numero 4 ha salido: " + dados[3] +
    + " El numero 5 ha salido: " + dados[4] + " El numero 6 ha salido: " + dados[5] + " El numero 7 ha salido: " + dados[6] 
    + " El numero 8 ha salido: " + dados[7] + " El numero 9 ha salido: " + dados[8]+ " El numero 10 ha salido: " + dados[7] +
    + " El numero 11 ha salido: " + dados[10] + " El numero 12 ha salido: " + dados[11];

}

console.log(lanzar());



