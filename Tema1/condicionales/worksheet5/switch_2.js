let num = parseInt(prompt("Introduce un num"));

switch(num){
    case (num % 2 == 0):
    case 2:
        document.write("El numero es par");
        break;

    case (num % 3 ==0):
    case 3:
        document.write("El numero es multiplo de 3");
        break;

    case (num % 5==0):
    case 5:
        document.write("El numero es multiplo de 5");
        break;
        
    default: 
        document.write("El numero no es par, ni multiplo de 3, ni multiplo de 5");
        break;
}