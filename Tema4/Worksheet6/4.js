function crear(nombre, valor, minutosExpiracion = 5) {
    const fechaExpiracion = new Date();
    fechaExpiracion.setMinutes(fechaExpiracion.getMinutes() + minutosExpiracion);
    document.cookie = `${nombre}=${valor}; expires=${fechaExpiracion.toUTCString()};`;
}

function obtenerCookie(nombre) {
    return document.cookie.split("; ").find((row) => row.startsWith(nombre + "="))?.split("=")[1];
}

function eliminar(nombre) {
    document.cookie = `${nombre}=; expires=Thu, 01 Jan 1970 00:00:00 GMT;`;
}
