let listacompra = [];

window.onload = () => {
    
    const caja = document.getElementById("caja");
    const introducir = document.getElementById("introducir");
    const lista = document.getElementById("lista");
    const eliminar = document.getElementById("eliminar");
    
    const datosLocales = localStorage.getItem("listaCompra");
    if (datosLocales) {
        listacompra = JSON.parse(datosLocales);
        listacompra.forEach(item => crearEntrada(item));
    }
};

introducir.addEventListener("click", () => {
    const valor = caja.value.trim();
    if (valor) {
        listacompra.push(valor); 
        localStorage.setItem("listaCompra", JSON.stringify(listacompra));
        crearEntrada(valor); 
        caja.value = ""; 
    }
});

eliminar.addEventListener("click", ()=>{
    listacompra = []; 
    localStorage.removeItem("listaCompra"); 
    lista.innerHTML = "";
});

function crearEntrada(texto) {
    const nuevoNodo = document.createElement("li");

    const itemText = document.createElement("span");
    itemText.className = "item-text";
    itemText.innerText = texto;

    const actionIcons = document.createElement("div");
    actionIcons.className = "action-icons";

    const botonEditar = document.createElement("button");
    botonEditar.className = "edit-icon";
    botonEditar.innerText = "Editar";
    botonEditar.addEventListener("click", () => editarElemento(nuevoNodo, texto));

    const botonBorrar = document.createElement("button");
    botonBorrar.className = "delete-icon";
    botonBorrar.innerText = "Borrar";
    botonBorrar.addEventListener("click", () => borrarElemento(nuevoNodo, texto));

    actionIcons.appendChild(botonEditar);
    actionIcons.appendChild(botonBorrar);

    nuevoNodo.appendChild(itemText);
    nuevoNodo.appendChild(actionIcons);

    lista.appendChild(nuevoNodo);
}

function editarElemento(nodo, textoOriginal) {
    const nuevoTexto = prompt("Editar elemento:", textoOriginal);
    if (nuevoTexto && nuevoTexto.trim()) {
        const index = listacompra.indexOf(textoOriginal);
        if (index !== -1) {
            listacompra[index] = nuevoTexto.trim();
            localStorage.setItem("listaCompra", JSON.stringify(listacompra)); 
            nodo.querySelector(".item-text").innerText = nuevoTexto.trim();
        }
    }
}

function borrarElemento(nodo, texto) {
    const index = listacompra.indexOf(texto);
    if (index !== -1) {
        listacompra.splice(index, 1);
        localStorage.setItem("listaCompra", JSON.stringify(listacompra));
    }
    lista.removeChild(nodo); 
}