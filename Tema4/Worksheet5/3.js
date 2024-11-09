const nombre = document.getElementById("nombre");
const minus = document.getElementById("minuscula");
const mayus = document.getElementById("mayuscula");
const longitud =document.getElementById("longitud");
const boton = document.getElementById("boton");

const exMayus = /(?=.*[A-Z])/;
const exMinus = /(?=.*[a-z])/;
const exLongitud = /^.{6,}$/;

nombre.addEventListener("input", validacion);

function validacion(){
    if(exMinus.test(nombre.value)){
        minus.style.textDecoration = "Line-through";
        
    }else{
        minus.style.textDecoration = "none";   
    }


    if(exMayus.test(nombre.value)){
        mayus.style.textDecoration = "Line-through";
        
    }else{
        mayus.style.textDecoration = "none";
    }


    if(exLongitud.test(nombre.value)){
        longitud.style.textDecoration = "Line-through";
        
    }else{
        longitud.style.textDecoration = "none";
    }


    if(exMinus.test(nombre.value) && exMayus.test(nombre.value) && exLongitud.test(nombre.value)){
        boton.disabled = false;
    }else{
        boton.disabled = true;
    }

}

