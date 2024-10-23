let num1 = parseInt(prompt("Introduce un numero"));
let num2 = parseInt(prompt("Introduce otro numero"));
let op = prompt("Introduce una operacion");

switch(op){
    case "+":
        document.write("La suma de " + num1 + " y " + num2 + " es: " +(num1+num2));
        break;
    
    case "-":
        document.write("La resta de " + num1 + " y " + num2 + " es: " +(num1-num2));
        break;
    
    case "*":
        document.write("La multiplicacion de " + num1 + " y " + num2 + " es: " +(num1*num2));
        break;
        
    case "/":
        document.write("La division de " + num1 + " y " + num2 + " es: " +(num1/num2));
        break;

    default:
        document.write("No existe esa operación");
        break;
}