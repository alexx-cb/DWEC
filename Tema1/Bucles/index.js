let nombre =prompt("Dame tu nombre");

//Accede a la posicion 0 del String -- 'Alejandro' ps te daria la letra 'A'
document.write(nombre[0]);

document.write(nombre[nombre.length -1]);

// FOR
for ( let i=0; (i<nombre.length) && (nombre!= "Jesus"); i++ ){
    document.write("<p>"+nombre[i]+"</p>");
}

//WHILE
while (nombre == "jose"){
    document.write("hola jose");
}

let a = prompt("dime tu nombre");
let encontrado = false;

//FOR
for (let i=0; i< a.length && !encontrado ;i++){
    if(a[i]==="J"){
        encontrado=true;
    }else{
        document.write("hola");
    }
}



const arr = [3, 5, 7];

//'of' itera todos los valores del array -- 'in' itera los miembros del array (si tiene 3 va a poner [0, 1, 2])
for (let i of arr) {
  console.write(i + "<br>");
}


