// Establecer 10 primeros elementos a 0
let array1 = [1,2,5,4,6,8,4,9,3,6,4,7,5,6,8];

function elementos0(array){
    for(let i =0;i<10;i++){
        array[i] = 0;
    }
    console.log(array);
}
elementos0(array1);


// Añadir 1 a todos los elementos del array

let array2 = [1,2,5,4,6,8,4,9,3,6,4,7,5,6,8];

function mas1(array){
    for(let i =0;i<array.length;i++){
        array[i] += 1;
    }
    console.log(array);
}
mas1(array2);

// Mostrar valores del array separados por espacios
let array3 = [1,2,5,4,6,8,4,9,3,6,4,7,5,6,8];

function mostrar(array){
    return array3.join(' ');
}

console.log(mostrar(array3));