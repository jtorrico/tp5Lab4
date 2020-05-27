import React, { Component } from 'react'
import { Media, Button } from 'react-bootstrap'

class Producto extends Component {

    constructor(props) {
        super(props);
        this.state = {
            instrumento: []
        };
    }
    
    async componentDidMount(){
        const direccion = this.props.location.state;
        await fetch(`http://localhost:9001/api/v1/instrumentos/${direccion.id}`)
        .then(response => response.json())
        .then(response => {
            this.setState({instrumento: response});
        });
    }

    render() {
        return (
            <div>
                <Media>
                    <img
                        width={512}
                        height={512}
                        className="foto"
                        src={`../images/${this.state.instrumento.imagen}`}
                        alt="Generic placeholder"
                    />
                    <Media.Body className='lineaVertical'>
                        <div className='texto'>
                        <h5 className='vendidos'>{this.state.instrumento.cantidadVendida} vendidos</h5>
                        <p className='articulo'>{this.state.instrumento.instrumento}</p>
                        <p className='precio'>${this.state.instrumento.precio}</p>
                        <p className='modeloCosto'>Marca: {this.state.instrumento.marca}</p>
                        <p className='modeloCosto'>Modelo: {this.state.instrumento.modelo}</p>
                        <div>
                                {this.state.instrumento.costoEnvio === "G" ?
                                <p className='envio'> <img src="../images/camion.png" alt=""></img>Envió gratis a todo el pais!</p>
                                : <p className='costo'>Costo de Envio Interior de Argentina: ${this.state.instrumento.costoEnvio}</p>}
                            </div>
                        <Button variant="outline-primary">Agregar al Carrito</Button>
                        </div>
                    </Media.Body>
                </Media>
                <p className='descripcion'>Descripcion:</p>
                <p className='descripcion'>{this.state.instrumento.descripcion}</p>
            </div>
        )
    }
}
export default Producto