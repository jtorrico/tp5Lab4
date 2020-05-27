import React, { Component } from 'react';
import { Table, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'

class Editar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instrumentos: []
        };
    }

    async componentDidMount() {
        await fetch("http://localhost:9001/api/v1/instrumentos/")
            .then(response => response.json())
            .then(response => {
                this.setState({ instrumentos: response });
            });
    }

    render() {
        return (
            <div>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Instrumento</th>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Imagen</th>
                            <th>Precio</th>
                            <th>Costo Envio</th>
                            <th>Cantidad Vendida</th>
                            <th>Descripcion</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.instrumentos.map((instrumento, key) => {
                            return (
                                <tr key={key}>
                                    <td>{instrumento.id}</td>
                                    <td>{instrumento.instrumento}</td>
                                    <td>{instrumento.marca}</td>
                                    <td>{instrumento.modelo}</td>
                                    <td>{instrumento.imagen}</td>
                                    <td>{instrumento.precio}</td>
                                    <td>{instrumento.costoEnvio}</td>
                                    <td>{instrumento.cantidadVendida}</td>
                                    <td>{instrumento.descripcion}</td>
                                    <td>
                                        <Link to={{pathname:`editForm/${instrumento.id}`, state: {id: instrumento.id}}}>
                                            <Button variant='warning'>Editar</Button>                                            
                                        </Link>
                                    </td>
                                    <td>
                                        <Button variant="danger">Eliminar</Button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        )

    }
}

export default Editar