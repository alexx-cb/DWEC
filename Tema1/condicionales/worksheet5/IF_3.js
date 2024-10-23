let edad = parseInt(prompt("Introduce tu edad"));

if (edad <= 5){
    document.write("debes estar en la guardería");
}else if(edad >=6 && edad <= 11){
    document.write("debes estar en primaria");
}else if (edad >=12 && edad <=16){
    document.write("debes estar en la secundaria");
}else if(edad>=17 && edad <=21){
    document.write("debes estar en ciclos o bachillerato");
}else if(edad>21){
    document.write("debes estar en la universidad");
}