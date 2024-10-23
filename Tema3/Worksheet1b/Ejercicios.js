//1
function sum(num1, num2){
    return num1 + num2;
}

sum(40,2);
sum(42,0);
console.log("the answer to everything is", sum(42,0));

//Solucion
const sum = (num1, num2) => num1+num2;

//2 
function stringLength(str){
    console.log(`the length of "${str}" is:`, str.length)
}

let longestCityNameInTheWorld = "Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu"

stringLength(longestCityNameInTheWorld)

//Solucion
const stringLength = str => (`the length of "${str}" is:`, str.length);

//3
function stringLengthi(str){
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")

//Solucion

