let n = round(Math.random()*1);
document.write(n+'<br>');
let n2 = round((Math.random()*100)+100);
document.write(n2+'<br>');

let a = parseInt(prompt("Introduce un num"));
let b = parseInt(prompt("Introduce otro num"));

if(a>b){
    a=b;
    b=a;
}else{
    a=a;
    b=b;
}

document.write(Math.random()*(b-a)+a + '<br>');
