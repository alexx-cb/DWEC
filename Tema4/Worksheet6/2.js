function obtenerCookie(nombre) {
    return document.cookie.split("; ").find((row) => row.startsWith(nombre + "="))?.split("=")[1];
}

function comprobar(nombre) {
    return document.cookie.split(";").some((item) => item.trim().startsWith(nombre + "="));
}

function eliminar(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}


function crear(nombre, valor, minutosExpiracion = 5) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + minutosExpiracion);
    document.cookie = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()};`;
}

function actualizar() {
    document.body.innerHTML = "";

    const valorCookie = obtenerCookie("name");

    if (comprobar("name")) {
        const colorFondo = obtenerCookie("bgColor") || "#ffffff";
        const colorParrafo = obtenerCookie("textColor") || "#000000";
        const tamanoLetra = obtenerCookie("fontSize") || "16px";

        document.body.style.backgroundColor = colorFondo;
        document.body.style.color = colorParrafo;
        document.body.style.fontSize = tamanoLetra;

        document.body.innerHTML = `<p>hola ${valorCookie}</p>
                                   <button id="cerrar">Cerrar Sesión</button>
                                   <h3>Configuración de apariencia:</h3>
                                   <label>Color de fondo: <input type="color" id="bgColor" value="${colorFondo}"></label><br><br>
                                   <label>Color de texto: <input type="color" id="textColor" value="${colorParrafo}"></label><br><br>
                                   <label>Tamaño de letra: <input type="number" id="fontSize" value="${parseInt(tamanoLetra)}" min="10" max="40"> px</label><br><br>
                                   <button id="guardarConfig">Guardar Configuración</button>`;

        document.getElementById("cerrar").addEventListener("click", () => {
            eliminar("name");
            eliminar("bgColor");
            eliminar("textColor");
            eliminar("fontSize");
            location.reload();
            actualizar();
        });

        document.getElementById("guardarConfig").addEventListener("click", () => {
            const nuevoBgColor = document.getElementById("bgColor").value;
            const nuevoTextColor = document.getElementById("textColor").value;
            const nuevoFontSize = document.getElementById("fontSize").value + "px";

            crear("bgColor", nuevoBgColor);
            crear("textColor", nuevoTextColor);
            crear("fontSize", nuevoFontSize);

            location.reload();
        });

    } else {
        document.body.innerHTML = `<input type="text" id="caja" placeholder="Introduce tu nombre"><br><br>
                                   <button id="iniciar">Iniciar</button>`;

        document.getElementById("iniciar").addEventListener("click", () => {
            const nombreIntroducido = document.getElementById("caja").value;
            crear("name", nombreIntroducido);
            location.reload();
            actualizar();
        });
    }
}

window.onload = actualizar;
