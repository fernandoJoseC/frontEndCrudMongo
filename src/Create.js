import React, { useState } from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
var qs = require('qs');

export default function Create() {
    const [nombre, setNombre] = useState('');
    const [director, setDirector] = useState('');
    //const [mayorEdad, setMayor] = useState('');
    const [anioEstreno, setAnioEstreno] = useState('');
    const [idioma, setIdioma] = useState('');
    const [duracion, setDuracion] = useState('');

    const enviarDatos = () => {
        console.log(nombre);
        console.log(director);
        console.log(anioEstreno);
        console.log(idioma);
        //console.log(password);
        console.log(duracion);

        
        var data = qs.stringify({
            'nombre': nombre,
            'director': director,
            'anioEstreno': anioEstreno,
            'idioma': idioma,
            'duracion': duracion
        });
        var config = {
            method: 'post',
            //url: 'https://uide-crud.herokuapp.com/peliculas/crearPelicula',
            url: 'https://crudmongofernando.herokuapp.com/peliculas/crearPelicula',
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
                <input placeholder="Pelicula" onChange={(e) => setNombre(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>
                <label>Director</label>
                <br></br>
                <input placeholder="Director" onChange={(e) => setDirector(e.target.value)}></input>
            </Form.Field>
            <br />
            
            <br />
            <Form.Field>
                <label>Anio Estreno</label>
                <br></br>
                <input type="number" placeholder="anio Estreno" onChange={(e) => setAnioEstreno(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>

                <label>Idioma</label>
                <br></br>
                <input placeholder="idioma" onChange={(e) => setIdioma(e.target.value)}></input>
            </Form.Field>
            <br />
            <Form.Field>
                <label>Duracion</label>
                <br></br>
                <input placeholder="duracion" onChange={(e) => setDuracion(e.target.value)}></input>
            </Form.Field>
            <br />
            <Button onClick={enviarDatos} type="submit">Guardar</Button>
        </Form>
    )

}




