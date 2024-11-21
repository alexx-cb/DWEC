let bolas = [];
let svgNS = "http://www.w3.org/2000/svg";

window.onload = () => {
    
    for (let i = 0; i < 1000; i++) {
        bolas.push(new Bola("juego", getRandomInt(300), getRandomInt(300), getRandomInt(20, 50), getRandomInt(-5, 5), getRandomInt(-5, 5), 1152, 864));
    }

    setInterval(() => {
        bolas.forEach(bola => bola.mover());
    }, 30); 
}

class Bola {
    constructor(svgPadre, x, y, radio , velX , velY , tamanoX, tamanoY) {
        this.posicionX = x;
        this.posicionY = y;
        this.r = radio;
        this.velocidadX = velX;
        this.velocidadY = velY;
        this.limiteX = tamanoX;
        this.limiteY = tamanoY;
        this.elemento = this.crearTag(svgPadre);
        this.elemento.addEventListener('click', () => this.eliminar());
    }

    crearTag(svgPadre) {
        let bola = document.createElementNS(svgNS, "circle");
        bola.setAttribute("cx", this.posicionX);
        bola.setAttribute("cy", this.posicionY);
        bola.setAttribute("r", this.r);
        bola.setAttribute("fill", this.random_rgba());
        document.getElementById(svgPadre).appendChild(bola);
        return bola;
    }

    mover() {
        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;

        if (this.posicionX - this.r <= 0 || this.posicionX + this.r >= this.limiteX) {
            this.velocidadX *= -1;
        }
        if (this.posicionY - this.r <= 0 || this.posicionY + this.r >= this.limiteY) {
            this.velocidadY *= -1;
        }

        this.actualizarPosicion();
    }
    actualizarPosicion() {
        this.elemento.setAttribute("cx", this.posicionX);
        this.elemento.setAttribute("cy", this.posicionY);
    }

    eliminar() {
        this.elemento.remove();
        let index = bolas.indexOf(this);
        if (index > -1) {
            bolas.splice(index, 1);
        }
    }

    random_rgba() {
        let o = Math.round, r = Math.random, s = 255;
        return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}