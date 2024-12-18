window.onload = ()=>{
    crearTabla();
}

function crearTabla(){
    let tabla = $("<table>",{"border" :"1","width":"500px","height":"500px" ,"id":"tabla"});

    for(i =0;i<8;i++){
        let fila = $("<tr>");
        tabla.append(fila);

        for(j=0;j<8;j++){
            let columna = $("<td>");
            tabla.append(columna);
        }
    }
    $("body").append(tabla);

    $('td:gt(14)').css("background-color","red");
    $('td:lt(16)').css("background-color","blue")
}