let notasArray = [];
const btnNueva = document.getElementById("nueva");
const cuerpo = document.getElementById("contenedor");

window.onload = () => {

    const datosLocales = localStorage.getItem("notas");
    if (datosLocales) {
        notasArray = JSON.parse(datosLocales);
        notasArray.forEach(nota => crearNota(nota));
    }
    btnNueva.addEventListener("click", agregarNota);
}

function agregarNota() {
    const nuevaNota = { titulo: "", descripcion: "" };
    notasArray.push(nuevaNota);
    crearNota(nuevaNota);
    guardarNotas();
}

function crearNota(nota) {

    const nuevaNota = document.createElement("div");
    nuevaNota.className = "nota";
    nuevaNota.style.left = "50px";
    nuevaNota.style.top = "50px";

    const titulo = document.createElement("input");
    titulo.className = "titulo";
    titulo.value = nota.titulo;
    titulo.placeholder = "Título";
    titulo.addEventListener("input", () => {
        nota.titulo = titulo.value;
        guardarNotas();
    });

    const contenido = document.createElement("input");
    contenido.className = "contenido";
    contenido.value = nota.descripcion;
    contenido.placeholder = "Descripción";
    contenido.addEventListener("input", () => {
        nota.descripcion = contenido.value;
        guardarNotas();
    });

    
    const fecha = document.createElement("p");
    fecha.className = "fecha";
    fecha.textContent = obtenerFechaActual();

    
    const btnBorrar = document.createElement("button");
    btnBorrar.className = "borrar";
    btnBorrar.textContent = "X";
    btnBorrar.addEventListener("click", () => eliminarNota(nuevaNota, nota));
    
    nuevaNota.appendChild(titulo);
    nuevaNota.appendChild(contenido);
    nuevaNota.appendChild(fecha);
    nuevaNota.appendChild(btnBorrar);

    
    cuerpo.appendChild(nuevaNota);

    mover(nuevaNota);
}

function guardarNotas() {
    localStorage.setItem("notas", JSON.stringify(notasArray));
}

function eliminarNota(nodo, nota) {
    nodo.remove();
    notasArray = notasArray.filter(n => n !== nota);
    guardarNotas();
}


function mover(elemento) {
    let X = 0;
    let Y = 0; 
    let arrastrando = false;

    elemento.addEventListener("mousedown", (e) => {
        arrastrando = true;
        X = e.clientX - elemento.offsetLeft;
        Y = e.clientY - elemento.offsetTop;
        elemento.style.zIndex = "1000";
    });

    document.addEventListener("mousemove", (e) => {
        if (arrastrando) {
            elemento.style.left = `${e.clientX - X}px`;
            elemento.style.top = `${e.clientY - Y}px`;
        }
    });

    document.addEventListener("mouseup", () => {
        arrastrando = false;
        elemento.style.zIndex = "";
    });
}


function obtenerFechaActual() {
    const fecha = new Date();
    return `${fecha.toLocaleTimeString()} ${fecha.toLocaleDateString()}`;
}