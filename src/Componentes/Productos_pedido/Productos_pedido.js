import Producto_pedido from './Producto_pedido';

function Productos(props) {
    return (
        <>
            {props.productos_pedido.map((elemento) => {

                return (
                    <Producto_pedido key={elemento.id} producto={elemento}  />

                )

            })}
        </>
    )
}

export default Productos;