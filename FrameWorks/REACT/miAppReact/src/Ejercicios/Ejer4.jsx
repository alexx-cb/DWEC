import { useState } from 'react'

export function Ejercicio4(){
    var [numeroPulsaciones, setNumeroPulsaciones] =useState(0);
    
    function tratarEvento(){
        setNumeroPulsaciones(numeroPulsaciones+1);
    }
    
    return(
        <>
            <h2>Ejercicio 4</h2>
            <p>{numeroPulsaciones}</p>
            <button onClick={tratarEvento}>Pulsa</button>
        </>
    );
    
    
}

