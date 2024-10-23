let n = parseInt(prompt("Introduce un num"));
let fact =1;

for(let i = 1; i<=n;i++){
    fact *= i;
}
document.write(fact);