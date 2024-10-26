window.onload = ()=>{
    
    //Funcion que crea la tabla
    document.write("<table border='1em' id='1' bgcolor='white'>");
    for(let i =0;i<100;i++){
        document.write("<tr ");
        for(let j =0; j<100;j++){
            document.write("<td width='50px' height='15px'></td>"); 
        }
        document.write("</tr>");
    }

    document.write("</table>");

    document.write("<button>Borrar</button>")

    const btn = document.getElementsByTagName("button");
    //Cuando ocurre el evento de click en el boton, recorre todas las celdas para pintarlas de blanco
    btn[0].addEventListener("click", ()=>{
        for(let celdas of tabla){
            celdas.style.backgroundColor="white";    
        }
    });


    let tabla = document.getElementsByTagName("td");

    //recorre todas las celdas cuando ocurre el evento de 'raton por encima' y llama a la funcion de pintar las celdas
    for(let celdas of tabla){
        celdas.addEventListener("mouseover",pintarCelda);
    }  

    // Funcion que pinta la celda segun la tecla que se esté pulsando
    function pintarCelda(tecla){
        if(tecla.shiftKey){
            tecla.target.style.backgroundColor = "red";
        }else if(tecla.ctrlKey){
            tecla.target.style.backgroundColor = "blue";
        }else if(tecla.buttons ===2){
            tecla.target.style.backgroundColor= "white";
        }
    }

}
