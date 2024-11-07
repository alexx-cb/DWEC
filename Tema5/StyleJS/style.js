function cambiarColor(){
    document.getElementById("miDiv").style.backgroundColor= "red";
}

// Expresiones regulares
var expresion = /^[0-9]{8}[A-Z]$/;
console.log(expresion.test("15236478H"));
