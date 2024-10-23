let mes = prompt("introduce el mes");

switch(mes){
    case "Enero": 
    case "Marzo":
    case "Mayo":
    case "Julio":
    case "Agosto": 
    case "Octubre":
    case "Diciembre":
        document.write("tiene 31 días");
        break;

    case "Noviembre":
    case "Abril":
    case "Junio": 
    case "Septiembre":
        document.write("tiene 30 días");
        break;

    case "Febrero":
        document.write("tiene 28 días");
        break;
    default:
        document.write("no existe ese mes");
        break;
}