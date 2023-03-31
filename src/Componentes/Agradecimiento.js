import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


function Agradecimiento(props) {


    return (
        <>
            <h1>MUCHAS GRACIAS POR SU COMPRA</h1>

            <Link to="/productos">
                <Button variant='success'>REALIZAR UN NUEVO PEDIDO</Button>
            </Link>

        </>
    )
}

export default Agradecimiento;