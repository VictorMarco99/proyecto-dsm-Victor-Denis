import Productos_pedido from './Productos_pedido/Productos_pedido';

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

   

    return (
        <>
                <h1>DETALLES DEL PEDIDO:</h1>

            <Productos_pedido productos_pedido={productos_pedido_reales } />
                
                <h1>Precio total: {props.Precio_total} $</h1>
                <a href="/">
                    <button>Volver a la seccion de pedidos</button>
                </a>
                <a> </a>
                <button>Continuar con el pedido</button>

            
        </>
    )
}

export default Continuar_pedido;