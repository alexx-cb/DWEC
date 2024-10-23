class Rectangulo{
    constructor(altura,ancho){
        this.altura = altura;
        this.ancho = ancho;
    }

    muestraInfo(){
        console.log("Este rectangulo tiene de alto :" + this.altura);
    }


    get area(){
        return this.calcArea();
    }
    calcArea(){
        return this.altura * this.ancho;
    }

}

a = new Rectangulo(1,1);


