import React, { Component } from 'react'
import { Row, Col, Form, Button, InputGroup, FormControl } from 'react-bootstrap'
import {Link} from 'react-router-dom'

class EditForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instrumento: []
        };

    }

    async componentDidMount() {

        const direccion = this.props.location.state;
        await fetch(`http://localhost:9001/api/v1/instrumentos/${direccion.id}`)
            .then(response => response.json())
            .then(response => {
                this.setState({ instrumento: response });
            });
    }

    handleInputChange(e){
       this.setState({[e.target.name]: e.target.defaultValue})
    }

    handleSubmit(event){
        event.preventDefault();
        const data = new FormData(event.defaultValue)
        const direccion = this.props.location.state;
        return fetch(`http://localhost:9001/api/v1/instrumentos/${direccion.id}`, {
            method: 'PUT',
            body: data
        })
    }

    render() {
        return (
            <div>
                <br />
                <h5>Editar Instrumento</h5>
                <br />
                
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Instrumento</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            name= 'instrumento.instrumento'
                            defaultValue={this.state.instrumento.instrumento}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Marca</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            name='instrumento.marca'
                            defaultValue={this.state.instrumento.marca}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Modelo</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            name='instrumento.modelo'
                            defaultValue={this.state.instrumento.modelo}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Imagen</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            name='instrumento.imagen'
                            defaultValue={this.state.instrumento.imagen}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Precio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            name='instrumento.precio'
                            defaultValue={this.state.instrumento.precio}
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Costo Envio</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={this.state.instrumento.costoEnvio}
                            name='instrumento.costoEnvio'
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Cantidad Vendida</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={this.state.instrumento.cantidadVendida}
                            name='instrumento.cantidadVendida'
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-3">
                        <InputGroup.Prepend>
                            <InputGroup.Text id="inputGroup-sizing-default">Descripcion</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            as="textarea"
                            aria-label="Default"
                            aria-describedby="inputGroup-sizing-default"
                            defaultValue={this.state.instrumento.descripcion}
                            name='instrumento.descripcion'
                            onChange={(e) => this.handleInputChange(e)}
                        />
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Button>Guardar Cambios</Button>
                    </Col>
                    <Col>
                        <Link to='/editar'>
                            <Button>Cancelar</Button>
                        </Link>
                        
                    </Col>
                </Row>
                
            </div>
        )
    }
}
export default EditForm