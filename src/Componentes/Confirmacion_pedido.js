import { Link } from "react-router-dom";

function Confirmacion_pedido(props) {
    

    return (
        <>
            <h1>Precio total: {props.Precio_total} $</h1>
            <Link to='/Continuar_pedido'>
                <button  >REALIZAR PEDIDO</button>
            </Link>
        </>
    )
}

export default Confirmacion_pedido;