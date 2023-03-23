import './Producto.css'
import { useEffect, useState } from 'react';



function Producto(props) {

    const [Cantidad_producto, setCantidad_producto] = useState(0);

    const RestarProductoHandler = () => {

        if (Cantidad_producto != 0) {
            setCantidad_producto(Cantidad_producto - 1);
            props.Actualizar_precio_total(-1*props.producto.precio);
        }
    }


    const SumarProductoHandler = () => {

        
            setCantidad_producto(Cantidad_producto + 1);
            props.Actualizar_precio_total(props.producto.precio, props.producto.id);
    }



    return (
        <>
            <div className='container'>
                <div>{props.producto.id}.{props.producto.nombre}----{props.producto.precio}$</div> 
                <div>
                    <button onClick={RestarProductoHandler}>-</button>
                    {Cantidad_producto}
                    <button onClick={SumarProductoHandler} >+</button>
                </div>
                <div >  </div>
            </div>
        </>
        )
}

export default Producto;