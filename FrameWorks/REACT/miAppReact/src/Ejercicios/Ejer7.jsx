import React, { useState } from 'react';

export function Ejercicio7() {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');

  function ponerNombre(event){
    setNombre(event.target.value);
  };

  function ponerApellido(event){
    setApellido(event.target.value);
  };

  const introducir = (event) => {
    event.preventDefault();
    alert(`Hello ${nombre} ${apellido}!`);
  };

  return (
    <>
    <h2>Ejercio 7</h2>
    <form onSubmit={introducir}>
      <div>
        <label for="nombre">Nombre:</label>
        <input
          type="text"
          id="firstName"
          value={nombre}
          onChange={ponerNombre}
        />
      </div>
      <div>
        <label for="apellido">Apellido:</label>
        <input
          type="text"
          id="lastName"
          value={apellido}
          onChange={ponerApellido}
        />
      </div>
      <button type="submit">Pulsame</button>
    </form>
    </>
  );
}
