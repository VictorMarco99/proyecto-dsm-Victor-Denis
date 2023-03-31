import Productos_pedido from './Productos_pedido/Productos_pedido';
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';




function Continuar_pedido(props) {


    const productos_pedido = [props.productos.length];

    for (var i = 0; i < props.productos.length; i++) {

        productos_pedido[i] = {
            cantidad: props.Pedido[i],
            id: props.productos[i].id,
            nombre: props.productos[i].nombre,
            precio: props.productos[i].precio
            }
    }

    const productos_pedido_reales = productos_pedido.filter((elemento) => {
        return elemento.cantidad != 0;
    })


    const MandarAppHandler = () => { 
        props.actualizar_lista_app(productos_pedido_reales);
  /*      console.log(productos_pedido_reales);*/

    }

   

    return (
        <>
                <h1>DETALLES DEL PEDIDO:</h1>

                 <Productos_pedido productos_pedido={productos_pedido_reales } />
                
                <h1>Precio total: {props.Precio_total} $</h1>

                <Link to='/Formulario'>
                <Button variant='success' onClick={MandarAppHandler} >Continuar con el pedido</Button>
                </Link>
            
        </>
    )
}

export default Continuar_pedido;