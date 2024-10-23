let nombre = prompt("Introduce un nombre");

if(nombre.endsWith("a")){
    document.write("Bienvenida " + nombre);
}else if(nombre.endsWith("o")){
    document.write("Bienvenido " + nombre);
}

if(nombre == "Pablo" || nombre == "Eduardo"){
    document.write("Bienvenido");
}else if(nombre == "Ana" || nombre == "Clara"){
    document.write("Bienvenida");
}