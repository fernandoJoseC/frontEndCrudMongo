import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');

export default function Create() {
    const [nombrePelicula, setNombrePelicula] = useState('');
    const [director, setDirector] = useState('');
    const [mayorEdad, setMayor] = useState('');
    const [edad, setEdad] = useState('');
    const [password, setPassword] = useState('');
    const [fecha, setFecha] = useState('');

    const enviarDatos = () => {
        console.log(nombrePelicula);
        console.log(director);
        console.log(edad);
        console.log(mayorEdad);
        console.log(password);
        console.log(fecha);

        
        var data = qs.stringify({
            'nombre': nombrePelicula,
            'direccot': director,
            'anio_estreno': edad,
            'idioma': password
        });
        var config = {
            method: 'post',
            url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                window.alert("pelicula guardada")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                window.alert("ocurrio un error")
                console.log(error);
            });

    }

    return (
        <Form class="formularioUide">
            <Form.Field>
                <label>Nombre de la pelicula</label>
                <br></br>
                <input placeholder="Pelicula" onChange={(e) => setNombrePelicula(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>
                <label>Director</label>
                <br></br>
                <input placeholder="Director" onChange={(e) => setDirector(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>
                <Checkbox label="es mayor de edad" onChange={(e) => setMayor(!mayorEdad)}></Checkbox>
            </Form.Field>
            <br />
            <Form.Field>
                <label>Edad</label>
                <br></br>
                <input type="number" placeholder="edad" onChange={(e) => setEdad(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>

                <label>Contrasena</label>
                <br></br>
                <input type="password" placeholder="contrasena" onChange={(e) => setPassword(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>
                <label>Fecha</label>
                <br></br>
                <input type="date" placeholder="fecha" onChange={(e) => setFecha(e.target.value)}></input>
            </Form.Field>
            <br />
            <Button onClick={enviarDatos} type="submit">Guardar</Button>
        </Form>
    )

}




