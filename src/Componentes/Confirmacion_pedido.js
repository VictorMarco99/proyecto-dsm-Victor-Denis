import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Confirmacion_pedido(props) {
    

    return (
        <>
            <h1>Precio total: {props.Precio_total} $</h1>
            <Link to='/Continuar_pedido'>
                <Button variant='success'>REALIZAR PEDIDO</Button>
            </Link>
        </>
    )
}

export default Confirmacion_pedido;