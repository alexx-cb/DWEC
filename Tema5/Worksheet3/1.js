const inicio = document.getElementById("inicio");
const detener = document.getElementById("detener");
const reset = document.getElementById("reset");
const crono = document.getElementById("crono");

inicio.addEventListener("click", iniciarCrono);
detener.addEventListener("click", detenerTiempo);
reset.addEventListener("click", resetTiempo);

let intervalo;
let sec = 0;
let min = 0;


function detenerTiempo() {
    clearInterval(intervalo);
    inicio.disabled = false; 
}

function resetTiempo() {
    clearInterval(intervalo);
    crono.innerText = "00:00";
    sec = 0;
    min = 0;
    inicio.disabled = false; 
}

function iniciarCrono() {
    inicio.disabled = true;
    if (sec != 0 || min != 0) {
        intervalo = setInterval(() => {
            let nuevoMin = String(min).padStart(2, '0');
            let nuevoSec = String(sec).padStart(2, '0');
            
            crono.innerText = nuevoMin + ":" + nuevoSec;

            if (sec == 60) {
                min++;
                sec = 0;
            }
            sec++;
        }, 1000);
    } else {
        sec = 1;
        min = 0;

        intervalo = setInterval(() => {
            let nuevoMin = String(min).padStart(2, '0');
            let nuevoSec = String(sec).padStart(2, '0');
            
            crono.innerText = nuevoMin + ":" + nuevoSec;

            if (sec == 60) {
                min++;
                sec = 0;
            }
            sec++;
        }, 1000);
    }
}