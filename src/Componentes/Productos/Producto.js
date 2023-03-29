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
        <>
            <div className='container'>
                <div>{props.producto.id}.{props.producto.nombre}----{props.producto.precio}$</div>
                <img alt='' src={props.producto.imagen} style={{width:'150px',height:'150px'}} />
                <div>
                    <button onClick={RestarProductoHandler}>-</button>
                    {props.Pedido[props.producto.id]}
                    <button onClick={SumarProductoHandler} >+</button>
                </div>
                {/* <div >  </div> */}
                <br></br>
                <br></br>
                <br></br>

            </div>
        </>
        // 
        // <>
        //     <div className='container'>
        //         <h3>{props.producto.nombre}</h3>
        //         <h3>PRECIO:{props.producto.precio}$</h3>
        //         <img style={{ width: '100px' }} alt='' src={props.producto.imagen} />
        //         <button style={{ width: '30px', height: '15px' }} onClick={RestarProductoHandler}>-</button>
        //         <div style={{ width: '30px', height: '15px' }}>{props.Pedido[props.producto.id]}</div>
        //         <button style={{ width: '30px', height: '15px' }} onClick={SumarProductoHandler} >+</button>
        //         <br></br>
        //         <br></br>
        //         <br></br>
        //         <br></br>


        //     </div>
        // </>
    )
}
export default Producto;