import React, { Component, useState, useEffect } from 'react'
import { Modal, Button, Row, Col, Form } from 'react-bootstrap'



function AñadirModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="warning" onClick={handleShow}>Añadir</Button>
            
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Añadir Instrumento</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupInstrumento">
                                    <Form.Label>Instrumento</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese instrumento" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupMarca">
                                    <Form.Label>Marca</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese marca" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupModelo">
                                    <Form.Label>Modelo</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese modelo" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupImagen">
                                    <Form.Label>Imagen</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese imagen" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupPrecio">
                                    <Form.Label>Precio</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese precio" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupCostoEnvio">
                                    <Form.Label>Costo Envio</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese costo envio" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupCantidadVendida">
                                    <Form.Label>Cantidad Vendida</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese cantidad vendida" />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupDescripcion">
                                    <Form.Label>Descripcion</Form.Label>
                                    <Form.Control type="text" placeholder="Ingrese descripcion" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Guardar Cambios
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AñadirModal