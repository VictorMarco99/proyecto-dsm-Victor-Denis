import './Producto.css'
import { useEffect, useState } from 'react';



function Producto(props) {


    const RestarProductoHandler = () => {

        if (props.Pedido[props.producto.id]!=0){
            props.Actualizar_precio_total(-1 * props.producto.precio, props.producto.id, false);
        }
    }


    const SumarProductoHandler = () => {

        
            props.Actualizar_precio_total(props.producto.precio, props.producto.id,true);
    }



    return (
        <>
            <div className='container'>
                <div>{props.producto.id}.{props.producto.nombre}----{props.producto.precio}$</div> 
                <div>
                    <button onClick={RestarProductoHandler}>-</button>
                    {props.Pedido[props.producto.id]}
                    <button onClick={SumarProductoHandler} >+</button>
                </div>
                <div >  </div>
            </div>
        </>
        )
}
export default Producto;