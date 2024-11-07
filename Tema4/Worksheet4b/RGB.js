const titulo = document.getElementById("rgb");
const nuevo = document.getElementById("nuevo");
const cuadrado = document.getElementsByClassName("cuadrado");
const facil = document.getElementById("facil");
const dificil = document.getElementById("dificil");
var vidas;

window.onload = ()=>{
    
    nuevoJuego();
    nuevo.addEventListener("click",nuevoJuego);
    vidas=3;
     
}

function color() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return { r, g, b };
}


function nuevoJuego() {
    vidas=3;
    const a = color();
    titulo.innerText = "RGB( " + a.r + ", " + a.g + ", " + a.b + " )";
    
    
    for (let c of cuadrado) {
        let nuevoColor = color();
        c.style.backgroundColor = "rgb("+nuevoColor.r+",+"+nuevoColor.g +","+nuevoColor.b +")";
    }
    
    let mismo = Math.floor((Math.random()*6));
    cuadrado[mismo].style.backgroundColor = "rgb("+a.r+","+a.g +","+a.b +")";
    
    for(let c of cuadrado){
        
        c.addEventListener("click", (e)=>{
            
                if(e.target.style.backgroundColor == "rgb("+a.r+", "+a.g +", "+a.b+")"){
                    
                    nuevoJuego();
                    console.log("has ganado");
                    for(let re of cuadrado){
                        re.style.opacity="1";  
                    }
                }else{
                
                    e.target.style.opacity = "0";
                    
                }
            
        })
            
    }
    
}
