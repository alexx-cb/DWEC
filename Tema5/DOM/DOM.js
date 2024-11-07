window.onload =()=>{
    document.getElementById("btnCambiar").addEventListener("click", cambiarH1);
}


function cambiarH1(e){
    
    let cajatexto = document.getElementById("textbox");
    let titulo = document.getElementById("tiH1");
    

    if(cajatexto.value!=""){
        titulo.innerHTML = cajatexto.value;
        cajatexto.value="";
        titulo.style.backgroundColor = "green";
    }
}