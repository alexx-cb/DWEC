function paresImpares(){
    
    let lista = [];
    for(let i =0;i<100;i++){
        let aleatorio = Math.trunc((Math.random()*1000)+1);
        lista.push(aleatorio);
    }
    console.log(lista);

    const pares = lista.filter((lista) => lista % 2 ===0);
    console.log(pares);
    
    const impares = lista.filter((lista) => !(lista %2 ===0))
    console.log(impares);

    let lista2 = [];
    lista2.push(pares);
    lista2.push(impares);
    console.log(lista2);
}

paresImpares();
