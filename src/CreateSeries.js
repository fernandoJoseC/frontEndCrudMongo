import React from 'react'
import { Button, Checkbox, Form} from 'semantic-ui-react'
import InputExample from './inputHTML';
import dataList from './dataList';

const CreateSeries = () => (

    <Form>
        <Form.Field>
            <label>Nombre de la serie</label>
            <br></br>
            <input placeholder='Serie'></input>
        </Form.Field>
        <Form.Field>
        <label>Numero de temporadas</label>
            <br></br>
            <input placeholder='Temporadas'></input>
        </Form.Field>
        <Form.Field>
        <label>Director</label>
            <br></br>
            <input placeholder='Director'></input>
        </Form.Field>
        <Form.Field>
        <label>Idioma</label>
            <br></br>
            <input placeholder='Idioma'></input>
        </Form.Field>
        <Form.Field>
        <label>Año de estreno</label>
            <br></br>
            <input type="date" placeholder='Año'></input>
        </Form.Field>
        <Form.Field>
        <label>Descripcion</label>
            <br></br>
            <input placeholder='Descripcion'></input>
        </Form.Field>
        <Form.Field>
        <label>URL de la serie</label>
            <br></br>
            <InputExample></InputExample>
        </Form.Field>
        <br />
        <Button>Guardar</Button>
    </Form>

)

export default CreateSeries;