var pagina =1;
var busqueda =""; 
var result =0;

window.onload = ()=>{
    document.getElementById("btn").addEventListener("click", buscar);
    var mas = document.getElementById("mas");
    
    mas.addEventListener("click", peticionModerna)

}

function buscar(){
    result = document.getElementById("resultados");
    busqueda = document.getElementById("peli").value;

    lista.innerHTML = "";

    peticionModerna();
}

function masDatos(e){
    e.target.idPelicula;
    url = "http://www.omdbapi.com/?apikey=74542ddb&i="+e.target.idPelicula;

    fetch(url, {method: "GET"})
    .then((res)=> res.json())
    .then((datosRecibidos)=>{
       console.log(datosRecibidos.Plot); 
    
    })
    .catch((err)=> console.error("error: ", err));
}
function peticionModerna(){
    peticionEnCuerso =true;
    
    fetch("http://www.omdbapi.com/?apikey=74542ddb&s="+busqueda+"&page="+pagina, {method: "GET"})
    .then((res)=> res.json())
    .then((datosRecibidos)=>{
        
        pagina++;
        console.log(datosRecibidos);
        
        const lista = document.getElementById("lista");


        result.innerText = datosRecibidos.totalResults;

        datosRecibidos.Search.forEach(item => {
            let nuevo = document.createElement("li");
            let imagen = document.createElement("img");
            
            nuevo.innerText = item.Title + " - " + item.Year;
            imagen.src = item.Poster;


            imagen.idPelicula = item.imdbID;
            imagen.addEventListener("click", masDatos);
            
            //por si no da 
            imagen.addEventListener("error", (e)=>{
                //e.target.src = "URL POR DEFECTO"
            });

            lista.appendChild(nuevo);
            nuevo.appendChild(imagen);
        });
    
        peticionEnCuerso =false;

    })
    .catch((err)=> console.error("error: ", err));
}

function peticionAjax(){
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //Llega la respuesta y ha encontrado lo pedido, luego todo ok.
        if (this.readyState == 4 && this.status == 200) {
            
            const respuesta = JSON.parse(this.responseText);
            
            for (us of respuesta.usuarios){
               document.getElementById("original").innerHTML = us.nombre;
            }

        }
    };
    xhttp.open("GET", "usuario.json", true);
    xhttp.send();
} 

// API de peliculas
//http://www.omdbapi.com/?apikey=74542ddb&t=star