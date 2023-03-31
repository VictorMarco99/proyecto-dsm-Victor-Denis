import Producto from './Producto';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Productos(props) {
    return (

        <>
        {
            props.productos.map((elemento) => {

                return (
                    <Producto key={elemento.id} producto={elemento} Actualizar_precio_total={props.Actualizar_precio_total} Pedido={props.Pedido} />

                )

            })
        }
        </>
        
    )
}

export default Productos;