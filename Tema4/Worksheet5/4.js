const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const pass = document.getElementById("pass");
const rePass = document.getElementById("rePass");
const btn = document.getElementById("boton");

const exNom = /^[a-zA-Z]+$/;
const exApe = /^[a-zA-Z]+$/;
const exTele = /^\d{9}$/;
const exPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+={}\[\]:;"'<>,.?/\\|-]).{8,}$/;
const exCorreo = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

nombre.addEventListener("input", valNombre);
apellido.addEventListener("input", valApellido);
telefono.addEventListener("input", valTelefono);
correo.addEventListener("input", valCorreo);
pass.addEventListener("input", valPass);
rePass.addEventListener("input", repetida);

function valNombre(){
    if(exNom.test(nombre.value)){
        nombre.style.backgroundColor="aquamarine"
    }else{
        nombre.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function valApellido(){
    if(exApe.test(apellido.value)){
        apellido.style.backgroundColor="aquamarine";
    }else{
        apellido.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function valTelefono(){
    if(exTele.test(telefono.value)){
        telefono.style.backgroundColor= "aquamarine";
    }else{
        telefono.style.backgroundColor ="rgb(236, 98, 98)";
    }
}

function valCorreo(){
    if(exCorreo.test(correo.value)){
        correo.style.backgroundColor="aquamarine";
    }else{
        correo.style.backgroundColor= "rgb(236, 98, 98)";
    }
}

function valPass(){
    if(exPass.test(pass.value)){
        pass.style.backgroundColor="aquamarine";
    }else{
        pass.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function repetida(){
    if(pass.value === rePass.value){
        rePass.style.backgroundColor="aquamarine"
    }else{
        rePass.style.backgroundColor="rgb(236, 98, 98)";
    }
}

function enviar(){
    if(!exNom.test(nombre.value) || !exApe.test(apellido.value) || !exTele.test(telefono.value) || !exCorreo.test(correo.value) || !exPass.test(pass.value) || !pass.value === rePass.value){
        btn.disabled=false;
    }else{
        btn.disabled=false;
    }
}