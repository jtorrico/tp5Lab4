import React, { Component } from 'react';
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom';

class Lista extends Component{

    constructor(props) {
        super(props);
        this.state = {
            instrumentos: []
        };
    }
    
    async componentDidMount(){
        await fetch("http://localhost:9001/api/v1/instrumentos/")
        .then(response => response.json())
        .then(response => {
            this.setState({instrumentos: response});
        });
    }

    render() {
    return (
        <div>
            {this.state.instrumentos.map((instrumento) => {
                
                return (
                    <Media className='center' key={instrumento.id}>
                        <img
                            width={256}
                            height={256}
                            className="mr-3"
                            src={`/images/${instrumento.imagen}`}
                            alt="Generic placeholder"
                        />
                        <Media.Body>
                            <Link to={{pathname:`producto/${instrumento.id}`, state: {id: instrumento.id}}}>{instrumento.instrumento}</Link>
                            <p className='precio'>${instrumento.precio}</p>
                            <div>
                                {instrumento.costoEnvio === "G" ?
                                <p className='envio'> <img src="./images/camion.png" alt=""></img>Envió gratis a todo el pais!</p>
                                : <p className='costo'>Costo de Envio Interior de Argentina: ${instrumento.costoEnvio}</p>}
                            </div>
                            <p>{instrumento.cantidadVendida} vendidos</p>
                        </Media.Body>
                    </Media>
                )
            })}
        </div>
    )
    }
}

export default Lista