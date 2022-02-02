import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'
import InputExample from './inputHTML';
import dataList from './dataList';
import axios from 'axios';
import { useState } from 'react/cjs/react.development';
var qs = require('qs');

export default function CreateSeries() {
    const [nombre, setNombre] = useState('');
    const [numTemporadas, setNumTemporadas] = useState('');
    const [director, setDirector] = useState('');
    const [idioma, setIdioma] = useState('');
    const [anioEstreno, setAnioEstreno] = useState('');
    const [descripcion, setDescripcion] = useState('');

    const enviarDatos = () => {
        console.log(nombre);
        console.log(numTemporadas);
        console.log(director);
        console.log(idioma);
        console.log(anioEstreno);
        console.log(descripcion);

        var data = qs.stringify({
            'nombre': nombre,
            'numTemporadas': director,
            'director': director,
            'idioma': idioma,
            'anioEstreno': anioEstreno,
            'descripcion': descripcion
        });

        var config = {
            method: 'post',
            url: 'https://crudmongofernando.herokuapp.com/series/crearSerie',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                window.alert("serie guardada")
                console.log(JSON.stringify(response.data));
            })
            .catch(function (error) {
                window.alert("ocurrio un error")
                console.log(error);
            });

    }

    return (

        <Form>
            <Form.Field>
                <label>Nombre de la serie</label>
                <br></br>
                <input placeholder='Serie' onChange={(e) => setNombre(e.target.value)}></input>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Numero de temporadas</label>
                <br></br>
                <input placeholder='Temporadas' onChange={(e) => setNumTemporadas(e.target.value)}></input>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Director</label>
                <br></br>
                <input placeholder='Director' onChange={(e) => setDirector(e.target.value)}></input>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Idioma</label>
                <br></br>
                <input placeholder='Idioma' onChange={(e) => setIdioma(e.target.value)}></input>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Año de estreno</label>
                <br></br>
                <input type="number" placeholder='Anio' onChange={(e) => setAnioEstreno(e.target.value)}></input>
            </Form.Field>
            <br></br>
            <Form.Field>
                <label>Descripcion</label>
                <br></br>
                <input placeholder='Descripcion' onChange={(e) => setDescripcion(e.target.value)}></input>
            </Form.Field>
            <br />
            <Button onClick={enviarDatos} type="submit">Guardar</Button>
        </Form>

    )




}

