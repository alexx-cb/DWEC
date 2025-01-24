export function Ejercicio5(){
    var nombres = ["pepe", "alex", "javier"];
      var miLista = nombres.map(nombre => 
      (
          <li key={nombre}>{nombre}</li>
      ) 
      );

    return(
        <>
            <h2>Ejercicio 5</h2>
            <ul>
                {miLista}
            </ul>
        </>
    );
}