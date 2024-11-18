const letras = document.querySelectorAll(".letras");
const palabra = document.getElementsByClassName("rayas")[0];
const vidasParrafo = document.getElementById("vidas");
const perdiste = document.getElementById("perdiste");

const palabrasOcultas = ["FERNANDO", "VERSTAPPEN", "SAINZ", "HAMILTON", "SENNA"];

let oculta = palabrasOcultas[Math.floor(Math.random() * palabrasOcultas.length)];

let estadoActual = Array(oculta.length).fill("_");

window.onload = () => {
    let vidas = 10;
    vidasParrafo.innerText = "You have " + vidas + " lives";

    palabra.innerText = estadoActual.join(" ");

    for (let i = 0; i < letras.length; i++) {
        letras[i].addEventListener("click", (event) => {
            const letraSeleccionada = event.target.innerText.toUpperCase();
            letras[i].disabled = true;

            let encontrada = false;
            for (let j = 0; j < oculta.length; j++) {
                if (oculta[j] === letraSeleccionada) {
                    estadoActual[j] = letraSeleccionada;
                    encontrada = true;
                }
            }

            palabra.innerText = estadoActual.join(" ");

            if (encontrada) {
                console.log("Letra encontrada: " + letraSeleccionada);
            } else {
                console.log("Letra no encontrada: " + letraSeleccionada);
                vidas--;
                vidasParrafo.innerText = "You have " + vidas + " lives";

                if (vidas === 0) {
                    perdiste.innerText = "¡You lost the Game! The word was " +oculta;
                    for(let k =0;letras.length;k++){
                        letras[k].disabled=false;
                    }
                }
            }
            if (!estadoActual.includes("_")) {
                perdiste.innerText = "¡WIN! The word was " + oculta;
            }
        });
    }
};
