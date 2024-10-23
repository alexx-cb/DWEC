let ex1 = parseInt(prompt("Introduce una nota de examen"));
let ex2 = parseInt(prompt("Introduce una nota de examen"));
let tr1 = parseInt(prompt("Introduce una nota de trabajo"));
let tr2 = parseInt(prompt("Introduce una nota de trabajo"));
let media;

media = (((ex1+ex2)/2)*0.75) + (((tr1+tr2)/2)*0.25); 

if(ex1<4.5 || ex2 < 4.5 || tr1 < 4.5 || tr2 <4.5){
    document.write("Suspenso");
    document.write("La media es: " + media);
}else if(media>=5){
    document.write("Aprobado");
    document.write("La media es: " + media);
}else if(media<5){
    document.write("Suspenso");
    document.write("La media es: " + media);
}
