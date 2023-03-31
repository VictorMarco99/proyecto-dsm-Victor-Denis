import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './Producto.css'
import { useEffect, useState } from 'react';



function Producto(props) {


    const RestarProductoHandler = () => {

        if (props.Pedido[props.producto.id] != 0) {
            props.Actualizar_precio_total(-1 * props.producto.precio, props.producto.id, false);
        }
    }


    const SumarProductoHandler = () => {


        props.Actualizar_precio_total(props.producto.precio, props.producto.id, true);
    }



    return (
        //     <>
        //         <div className='container'>
        //             <div>{props.producto.id}.{props.producto.nombre}----{props.producto.precio}$</div>
        //             <img alt='' src={props.producto.imagen} style={{width:'150px',height:'150px'}} />
        //             <div>
        //                 <button onClick={RestarProductoHandler}>-</button>
        //                 {props.Pedido[props.producto.id]}
        //                 <button onClick={SumarProductoHandler} >+</button>
        //             </div>
        //             <br></br>
        //             <br></br>
        //             <br></br>

        //         </div>
        //     </>
        <>
            <Container  >
                <Row>
                    <Col md={6}>
                        Producto: <h4>{props.producto.nombre}</h4>
                    </Col>
                    <Col md={6}>
                        Precio: <h4>{props.producto.precio}$</h4>
                    </Col>
                </Row>
                <Row class>
                    <Col md={6}>
                        <img alt='' src={props.producto.imagen} class="rounded-3" style={{ width: '150px', height: '150px' }} />
                    </Col>
                    <Col class="border border-dark" md={6} >
                        <h5>Cantidad</h5>
                        <Button variant="outline-info" onClick={RestarProductoHandler}>-</Button>
                           <h8>{props.Pedido[props.producto.id]}</h8>       
                        <Button variant="outline-danger" onClick={SumarProductoHandler} >+</Button>
                    </Col>
                </Row>
            </Container>
            --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
        </>
    )

}
export default Producto;