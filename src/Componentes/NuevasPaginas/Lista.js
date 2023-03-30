import axios from "axios"
// import { Button } from "bootstrap";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";

function Lista(props){

    const borraProducto =()=>{
        axios.delete('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + props.id+'/' +props.clave+'.json')
        .then((response)=>{
            //console.log(response);
            console.log(props.id);
            console.log(props.clave);
        //    window.location.reload()
        }).catch((error)=>{
            console.log(error)
        })

        props.borrar_pedido(props.clave);
    }

    const productos_definidos = props.productos.map((elemento) => {
        return(<div>
            <li>
                <ul> {elemento.producto}
                </ul>
                <ul> {elemento.cantidad}
                </ul>
                <ul> {elemento.precio_unidad}
                </ul>
            </li>
        </div>
        )

    })

    return(
        <>
                <div>{props.nombre}---{props.direccion}:----{productos_definidos}</div>
                <Button variant="primary" onClick={borraProducto} >hazme click para borrar producto</Button>
        </>
    )
}
export default Lista;