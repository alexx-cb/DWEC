let barras = [];
let bolas = [];
let svgNS = "http://www.w3.org/2000/svg";

let LimitePantallaX, LimitePantallaY;

window.onload = () => {
    const svg = document.getElementById("atari");
    LimitePantallaX = parseInt(svg.getAttribute("width"));
    LimitePantallaY = parseInt(svg.getAttribute("height"));


    barras.push(new Barra("atari", 110, 250, 10, 200));
    barras.push(new Barra("atari", 1400, 250, 10, 200));

    bolas.push(new Bola("atari", 750, 300, 25));

    svg.addEventListener("mousemove", (e) => {
        let mouseY = e.clientY - svg.getBoundingClientRect().top;
        barras[0].moverJugador(mouseY);
    });

    setInterval(() => {
        bolas.forEach((bola) => bola.mover());
        barras[1].moverIA(bolas[0]);
    }, 30);

};

class Bola {
    constructor(svgPadre, x, y, radio) {
        this.posicionX = x;
        this.posicionY = y;
        this.r = radio;
        this.velocidadX = 10;
        this.velocidadY = 10;
        this.limiteX = LimitePantallaX;
        this.limiteY = LimitePantallaY;
        this.elemento = this.crearTag(svgPadre);
        this.movimientoActivo = true; 
    }

    crearTag(svgPadre) {
        let bola = document.createElementNS(svgNS, "circle");
        bola.setAttribute("cx", this.posicionX);
        bola.setAttribute("cy", this.posicionY);
        bola.setAttribute("r", this.r);
        bola.setAttribute("fill", "white");
        document.getElementById(svgPadre).appendChild(bola);
        return bola;
    }

    mover() {
        if (!this.movimientoActivo){
            return;
        } 

        this.posicionX += this.velocidadX;
        this.posicionY += this.velocidadY;

        if (this.posicionX - this.r <= 0){
            this.reiniciar();
        }

        if (this.posicionY - this.r <= 0 || this.posicionY + this.r >= this.limiteY) {
            this.velocidadY *= -1;
        }

        barras.forEach((barra) => {
            const bolaIzquierda = this.posicionX - this.r;
            const bolaDerecha = this.posicionX + this.r;
            const bolaArriba = this.posicionY - this.r;
            const bolaAbajo = this.posicionY + this.r;

            const barraIzquierda = barra.posicionX;
            const barraDerecha = barra.posicionX + barra.ancho;
            const barraArriba = barra.posicionY;
            const barraAbajo = barra.posicionY + barra.largo;

            if (
                //bola izq -->barra
                bolaDerecha >= barraIzquierda && 
                // bola dere ->barra
                bolaIzquierda <= barraDerecha &&
                // bola superior ->barra
                bolaAbajo >= barraArriba &&
                //bola inferior ->barra 
                bolaArriba <= barraAbajo
            ) {
                this.velocidadX *= -1; 
    
                const incremento = 1;
                this.velocidadX += (this.velocidadX > 0 ? incremento : -incremento);
                this.velocidadY += (this.velocidadY > 0 ? incremento : -incremento);
            }
        });

        this.actualizarPosicion();
    }

    actualizarPosicion() {
        this.elemento.setAttribute("cx", this.posicionX);
        this.elemento.setAttribute("cy", this.posicionY);
    }

    reiniciar() {
        let numeroX = (Math.random() * 2 - 1) * (Math.random() < 0.5 ? -1 : 1);
        let numeroY = (Math.random() * 2 - 1) * (Math.random() < 0.5 ? -1 : 1);

        this.movimientoActivo = false;
        this.posicionX = 750;
        this.posicionY = 300;
        this.actualizarPosicion();

        setTimeout(() => {
            this.movimientoActivo = true;
            this.velocidadX = 10;  
            this.velocidadY = 10;
            
            if(numeroX<0){
                this.velocidadX *=-1;
            }
            if(numeroY<0){
                this.velocidadY *=-1;
            }
            
        }, 3000); 
    }
}

class Barra {
    constructor(svgPadre, x, y, ancho, largo, velY = 20) {
        this.posicionX = x;
        this.posicionY = y;
        this.ancho = ancho;
        this.largo = largo;
        this.velocidadY = velY;
        this.limiteY = LimitePantallaY;
        this.elemento = this.crearTag(svgPadre);
    }

    crearTag(svgPadre) {
        let barra = document.createElementNS(svgNS, "rect");
        barra.setAttribute("width", this.ancho);
        barra.setAttribute("height", this.largo);
        barra.setAttribute("x", this.posicionX);
        barra.setAttribute("y", this.posicionY);
        barra.setAttribute("fill", "white");
        document.getElementById(svgPadre).appendChild(barra);
        return barra;
    }

    moverJugador(mouseY) {
        this.posicionY = Math.max(0, Math.min(mouseY - this.largo / 2, this.limiteY - this.largo));
        this.actualizarPosicion();
    }

    moverIA(bola) {
        this.posicionY = Math.max(0, Math.min(bola.posicionY - this.largo / 2, this.limiteY - this.largo));
        this.actualizarPosicion();
    }

    actualizarPosicion() {
        this.elemento.setAttribute("y", this.posicionY);
    }
}
