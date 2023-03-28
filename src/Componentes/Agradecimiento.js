import { Link } from "react-router-dom";

function Agradecimiento(props) {


    return (
        <>
            <h1>MUCHAS GRACIAS POR SU COMPRA</h1>

            <Link to="/">
                <button>REALIZAR UN NUEVO PEDIDO</button>
            </Link>

        </>
    )
}

export default Agradecimiento;