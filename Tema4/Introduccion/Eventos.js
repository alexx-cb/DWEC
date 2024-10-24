// metemos en una cosntante todos los elementos q tengan de nombre "button" (array)
const btn = document.getElementsByTagName("button");
const cajaTexto = document.getElementById("textBox");


//mensaje por consola
btn[0].addEventListener("click",()=>console.log("has pulsado boton 1"));
btn[1].addEventListener("click",()=>console.log("has pulsado boton 2"));

//cambiar fondo del html
btn[0].addEventListener("click",cambiaColor);
btn[1].addEventListener("click",()=>document.body.style.backgroundColor="blue");


function cambiaColor(){
    document.body.style.backgroundColor = "red";
}
//cuando pasa por encima del elemento y cuando se quita
btn[0].addEventListener("mouseover",cambiaColor);
btn[0].addEventListener("mouseout",()=>document.body.style.backgroundColor="white");



function saltaAlert(e){
    console.log(e);
    alert("HAS CLICADO");
}

btn[0].addEventListener("click",saltaAlert);

//click boton 2 --> remueve el listener del boton 1
btn[1].addEventListener("click",()=>btn[0].removeEventListener("click", saltaAlert));


// consola cuando escribes en la caja y te dice la tecla q has tocado
cajaTexto.addEventListener("keydown",(e)=>console.log("has pulsado la tecla "+ e.key))