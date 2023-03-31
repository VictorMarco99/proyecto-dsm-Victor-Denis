import './Producto_pedido.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import React from 'react';

function Producto_pedido(props) {



    return (
        <>  
            <Container className='square-border border-success'>
                <Row>
                    <Col md={4}>
                    <h5> Cantidad de: {props.producto.nombre}</h5>
                    </Col>
                    <Col md={4}>
                        <h5> {props.producto.cantidad} UNIDADES</h5>
                    </Col>
                </Row>
            </Container>
            <br></br>
            ------------------------------------------------------------------------------------------
            {/* <div className='container'>
               
                <div className='container'>
                    <div>{props.producto.nombre}---CANTIDAD: {props.producto.cantidad} UNIDADES</div> 

                    <div >  </div>
                </div>

            </div> */}



        </>
        )
}

export default Producto_pedido;