import axios from "axios"
// import { Button } from "bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


function Lista(props) {

    const borraProducto = () => {
        axios.delete('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + props.id + '/' + props.clave + '.json')
            .then((response) => {
                //console.log(response);
                console.log(props.id);
                console.log(props.clave);
                //    window.location.reload()
            }).catch((error) => {
                console.log(error)
            })

        props.borrar_pedido(props.clave);
    }

    const productos_definidos = props.productos.map((elemento) => {
        return (
                    <tr>
                        <td>{elemento.producto}</td>
                        <td>{elemento.cantidad}</td>
                        <td>{elemento.precio_unidad}</td>
                    </tr>
        )

    })
    const tabla_final = (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio Unidad</th>
                </tr>
            </thead>

            <tbody>
                {productos_definidos}
            </tbody>
        </Table>

    )
    console.log(tabla_final)

    return (
        <>
            <Container>
                <Row>
                    <Col lg={4}>
                        Nombre
                        <h4>{props.nombre}</h4>
                    </Col>

                    <Col lg={4}>
                        Apellidos
                        <h4>{props.apellidos}</h4>
                    </Col>

                    <Col lg={4}>
                        Direccion de envio
                        <h4>{props.direccion}</h4>
                    </Col>

                    <Col lg={12}>
                        {tabla_final}
                    </Col>
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                
                <Row>
                    <Col lg={3}>
                        <Button variant="danger" onClick={borraProducto} >BORRAR PEDIDO</Button>

                    </Col>
                </Row>
            </Container>
            <br></br>
            <br></br>
            <br></br>

            {/* <div>{props.nombre}---{props.direccion}:----{productos_definidos}</div>
                <Button variant="primary" onClick={borraProducto} >hazme click para borrar producto</Button> */}
        </>
    )
}
export default Lista;