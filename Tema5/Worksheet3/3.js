const tableroCartas = document.getElementById("tableroCartas");
const cronometro = document.getElementById("cronometro");
const resultado = document.getElementById("resultado");

let intervaloCronometro;
let segundos = 0;
let minutos = 0;
let cronometroIniciado = false;


const numerosCartas = [1, 2, 3, 4, 5];
const cartas = [...numerosCartas, ...numerosCartas];


let cartasVolteadas = [];
let cartasEmparejadas = [];

function iniciarCronometro() {
    if (!cronometroIniciado) {
        cronometroIniciado = true;
        intervaloCronometro = setInterval(() => {
            segundos++;
            if (segundos === 60) {
                minutos++;
                segundos = 0;
            }
            const minutosFormateados = String(minutos).padStart(2, "0");
            const segundosFormateados = String(segundos).padStart(2, "0");
            cronometro.textContent = `${minutosFormateados}:${segundosFormateados}`;
        }, 1000);
    }
}

function barajarCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function crearCartas() {
    barajarCartas(cartas);
    cartas.forEach((numero) => {
        const carta = document.createElement("div");
        carta.classList.add("carta");
        carta.innerHTML = `<div class="contenido-carta">${numero}</div>`;
        carta.addEventListener("click", () => voltearCarta(carta, numero));
        tableroCartas.appendChild(carta);
    });
}

function voltearCarta(carta, numero) {
    if (!cronometroIniciado) iniciarCronometro();

    if (cartasVolteadas.length < 2 && !carta.classList.contains("volteada")) {
        carta.classList.add("volteada");
        cartasVolteadas.push({ carta, numero });

        if (cartasVolteadas.length === 2) {
            verificarPareja();
        }
    }
}

function verificarPareja() {
    const [primeraCarta, segundaCarta] = cartasVolteadas;

    if (primeraCarta.numero === segundaCarta.numero) {
        cartasEmparejadas.push(primeraCarta.numero);
        cartasVolteadas = [];

        if (cartasEmparejadas.length === numerosCartas.length) {
            resultado.innerText = "YOU WIN";
            clearInterval(intervaloCronometro);
        }
    } else {
        setTimeout(() => {
            primeraCarta.carta.classList.remove("volteada");
            segundaCarta.carta.classList.remove("volteada");
            cartasVolteadas = [];
        }, 1000);
    }
}

crearCartas();