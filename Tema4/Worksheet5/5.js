const numero = document.getElementById("numero");
const titular = document.getElementById("titular");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano");
const tarjetaNum = document.getElementById("numeroTarj");
const tarjetaTitu = document.getElementById("titularTarj");
const tarjetaExpi = document.getElementById("expiracionTarj");
const cvv = document.getElementById("cvv");


const exNum = /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/;
const exNombre = /^[A-Z][a-z]+\s[A-Z][a-z]+$/;
const exCVV = /\d{3}/;



numero.addEventListener("blur", valNumero);
cvv.addEventListener("input", valCVV)
titular.addEventListener("input", valNombre);

numero.addEventListener("input", escribirNum);
titular.addEventListener("input", escribirNombre);
mes.addEventListener("input", fecha);
ano.addEventListener("input", fecha);



function valNombre(){
    if(exNombre.test(titular.value)){
        titular.style.backgroundColor="aquamarine";
    }else{
        titular.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function valNumero(){
    if(exNum.test(numero.value)){
        numero.style.backgroundColor="aquamarine";
    }else{
        numero.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function valCVV(){
    if(exCVV.test(cvv.value)){
        cvv.style.backgroundColor="aquamarine";
    }else{
        cvv.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function escribirNum() {
    let valorNumero = numero.value;
    let valorFormateado = "";

    for(let i = 0; i < 19; i++){
        if(i < valorNumero.length){
            if(i>=5 && i<9){
                valorFormateado += "*";
            }else if(i>=10 && i<14){
                valorFormateado += "*";
            }else if(i>17){
                valorFormateado += "#"
            }
            else{
                valorFormateado += valorNumero[i];
            }
        }else if((i + 1) % 5 === 0){
            valorFormateado += " ";

        }else{
            valorFormateado += "#";
        }
    }
    tarjetaNum.innerText = valorFormateado;
}


function escribirNombre(){
    if(titular.value ==""){
        tarjetaTitu.innerText= "Nombre Completo";
    }else{
        tarjetaTitu.innerText = titular.value;
    }
}


function fecha(){
    if(mes.selectedIndex==0 && ano.selectedIndex!=0){
        tarjetaExpi.innerText = "MM/"+ ano.options[ano.selectedIndex].value;
    }else if(mes.selectedIndex!=0 && ano.selectedIndex==0){
        tarjetaExpi.innerText = mes.options[mes.selectedIndex].value+"/AA";
    }else{
        tarjetaExpi.innerText = mes.options[mes.selectedIndex].value +"/"+ano.options[ano.selectedIndex].value;
    }
}