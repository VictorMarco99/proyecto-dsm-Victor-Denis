import Producto from './Producto';

function Productos(props) {
    return (
        <>
            {props.productos.map((elemento) => {

                return(
                    <Producto key={elemento.id} producto={elemento} Actualizar_precio_total={props.Actualizar_precio_total} />

                    )

                })}
        </>
    )
}

export default Productos;