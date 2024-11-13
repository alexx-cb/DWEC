const valorCookie = document.cookie.split("; ").find((row) => row.startsWith("name="))?.split("=")[1];

function comprobar(){
    return document.cookie.split(";").some((item) => item.trim().startsWith("name="));
}

function eliminar(){
    document.cookie = "name=; expires = Thu, 01 Jan 1970 00:00:00 GMT;"
}

function crear(valor){
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + 5);
    document.cookie = `name=${valor}; expires=${fechaExpiracion.toUTCString()};`;
}

function actualizar(){
    document.body.innerHTML = "";
    
    if(comprobar()){
        document.body.innerHTML = `<p>hola, ${valorCookie}</p>
                                   <button id="cerrar">Cerrar Sesión</button>`;
        
        const cerrar = document.getElementById("cerrar");
        cerrar.addEventListener("click", () => {
            eliminar();
            location.reload();
            actualizar();
        });
         
    }else{
        document.body.innerHTML = `<input type="text" id="caja" placeholder="Introduce tu nombre"><br><br>
                                   <button id="iniciar">Iniciar</button>`;

        const iniciar = document.getElementById("iniciar");
        iniciar.addEventListener("click", () => {
            
            const nombreIntroducido = document.getElementById("caja").value;
            crear(nombreIntroducido);
            location.reload();
            actualizar();
            
        });

    }

}
window.onload = actualizar;