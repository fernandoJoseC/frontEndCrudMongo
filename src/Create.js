import React from 'react'
import { Button, Checkbox, Form } from 'semantic-ui-react'

const Create = () => (
    <Form>
        <Form.Field>
            <label>Nombre de la pelicula</label>
            <br></br>
            <input placeholder="Pelicula"></input>
        </Form.Field>
        <Form.Field>
            <label>Director</label>
            <br></br>
            <input placeholder="Director"></input>
        </Form.Field>
        <Form.Field>
            <Checkbox label="es mayor de edad"></Checkbox>
        </Form.Field>
        <Form.Field>
            <label>Edad</label>
            <br></br>
            <input type="number" placeholder="edad"></input>
        </Form.Field>
        <Form.Field>
            <label>Contrasena</label>
            <br></br>
            <input type="password" placeholder="contrasena"></input>
        </Form.Field>
        <Form.Field>
            <label>Fecha</label>
            <br></br>
            <input type="date" placeholder="fecha"></input>
        </Form.Field>
        <Button>Guardar</Button>
    </Form>
)

export default Create;
