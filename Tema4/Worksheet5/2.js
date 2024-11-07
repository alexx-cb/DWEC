const nombre = document.getElementById("nombre");
const apellidos = document.getElementById("apellidos");
const dni = document.getElementById("dni");
const telefono = document.getElementById("telefono");
const correo = document.getElementById("correo");
const usuario = document.getElementById("usuario");
const boton = document.getElementById("entregar");

const eNombre = document.getElementById("eNombre");
const eApellido = document.getElementById("eApellido");
const eDni = document.getElementById("eDni");
const eTelefono = document.getElementById("eTelefono");
const eCorreo = document.getElementById("eCorreo");
const eUsuario = document.getElementById("eUsuario");

const letra = /^[a-zA-Z]+$/;
const exDni = /^[0-9]{8}[A-Z]$/;
const tele = /^[0-9]{9}$/;
const exCorreo = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const exUsuario = /\w{8,}[a-zA-Z]+\d+/;

nombre.addEventListener("blur", valNombre);
apellidos.addEventListener("blur", valApellidos);
dni.addEventListener("blur", valDni);
telefono.addEventListener("blur", valTelefono);
correo.addEventListener("blur", valCorreo);
usuario.addEventListener("blur", valUsuario);

function valNombre(){
    if(!letra.test(nombre.value)){
        eNombre.innerText = "mal nombre"
        return false;
    }else{
        eNombre.innerText = "";
        return true;
    }
}
function valApellidos(){
    if(!letra.test(apellidos.value)){
        eApellido.innerText = "mal apellido"
        return false;
    }else{
        eApellido.innerText = "";
        return true;
    } 
}

function valDni(){
    if(!exDni.test(dni.value)){
        eDni.innerText = "mal dni"
        return false;
    }else{
        eDni.innerText = "";
        return true;
    } 
}

function valTelefono(){
    if(!tele.test(telefono.value)){
        eTelefono.innerText = "mal telefono"
        return false;
    }else{
        eTelefono.innerText = "";
        return true;
    } 
}

function valCorreo(){
    if(!exCorreo.test(correo.value)){
        eCorreo.innerText = "mal correo"
        return false;
    }else{
        eCorreo.innerText = "";
        return true;
    } 
}
function valUsuario(){
    if(!exUsuario.test(usuario.value)){
        eUsuario.innerText = "mal usuario"
        return false;
    }else{
        eUsuario.innerText = "";
        return true;
    } 
}

if(!valNombre() || !valApellidos() || !valDni() || !valCorreo() || !valTelefono() || !valUsuario()){
    boton.disabled=true;
}else{
    boton.disabled=false;
}