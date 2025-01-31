import React, { useEffect, useState } from 'react';
import '../index.css';

export function Ejercicio9(){
    const [users, setUsers] = useState([]);

    function peticion(){
        fetch('https://random-data-api.com/api/users/random_user?size=10')
            .then(response => response.json())
            .then(data => setUsers(data))
            .catch(error => console.error('Error fetching data:', error));
    };

    useEffect(() => {
        peticion();
    }, []);

    return (
        <div class="container">
    <h1>Random Users</h1>
    <button class="botonUsuarios" onClick={peticion}>Fetch Users</button>
    <div class="card-container">
        {users.map(user => (
            <div key={user.id} class="card">
                <div class="card-inner">
                    <div class="card-front">
                        <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} class="card-img" />
                        <h2>{user.first_name} {user.last_name}</h2>
                        <h3>{user.employment.title}</h3>
                    </div>
                    <div class="card-back">
                        <p>Email: {user.email}</p>
                        <p>Username: {user.username}</p>
                        <p>Address: {user.address.street_address}, {user.address.city}</p>
                        <p>Phone: {user.phone_number}</p>
                    </div>
                </div>
            </div>
        ))}
    </div>
</div>
    );
};
