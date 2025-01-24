export function Ejercicio2y3() {
    return (
        <>
            <h2>Ejercicio 2 y 3</h2>
            <BotonAlert mensaje="Primer botón pulsado" />
            <BotonAlert mensaje="Segundo botón pulsado" />
            <BotonAlert mensaje="Tercer botón pulsado" />
        </>
    );
}

function BotonAlert({ mensaje }) {
    const mostrarAlert = () => {
        alert(mensaje);
    };

    return (
        <p><button onClick={mostrarAlert}>Alert</button></p>
    );
}