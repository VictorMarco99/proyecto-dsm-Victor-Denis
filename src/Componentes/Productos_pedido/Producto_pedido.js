import './Producto_pedido.css';

function Producto_pedido(props) {



    return (
        <>
            <div className='container'>
               
                <div className='container'>
                    <div>{props.producto.nombre}---CANTIDAD: {props.producto.cantidad} UNIDADES</div> 

                    <div >  </div>
                </div>

            </div>
        </>
        )
}

export default Producto_pedido;