import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';





function Formulario_pedido(props) {

    const [Nombre, setNombre] = useState('');
    const [Apellidos, setApellidos] = useState('');
    const [Direccion, setDireccion] = useState('');

    const navega = useNavigate();


    const nombreHandler = (event) => {

        setNombre(event.target.value);

    }

    const apellidosHandler = (event) => {

        setApellidos(event.target.value);

    }

    const direccionHandler = (event) => {

        setDireccion(event.target.value);

    }


    const submitHandler = (event) => {
        event.preventDefault();

        if (Nombre == '' || Apellidos == '' || Direccion == '') {
            alert('RELLENE TODOS LOS CAMPOS');
        } else {

            const Productos = [];

            for (var i = 0; i < props.Lista_productos_pedido.length; i++) {
                const nombre = props.Lista_productos_pedido[i].nombre;
                var array = {
                    producto: props.Lista_productos_pedido[i].nombre,
                    precio_unidad: props.Lista_productos_pedido[i].precio,
                    cantidad: props.Lista_productos_pedido[i].cantidad
                };


                Productos.push(array);

            }

            console.log(Productos);
            if (props.login) {
                // axios.post('https://dsm-react-demo-2023-7e01d-default-rtdb.europe-west1.firebasedatabase.app/historico/' + ficherito + '.json' + '?auth=' + props.idToken, producto)
                // axios.post('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + props.id + '.json' + '?auth=' + props.token, {


                axios.post('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app/pedidos/' + props.id + '.json', {
                    nombre: { Nombre },
                    apellidos: { Apellidos },
                    direccion: { Direccion },
                    productos: Productos
                })
                    .then((response) => {
                        alert('producto insertado en la base de datos')
                    });

                props.reiniciar();
                navega('/Agradecimiento');
            } else {
                alert('debe logearse');
            }


        }
    }

    return (
        <>
            <h2> FORMULARIO:</h2>
            {/* <form onSubmit={submitHandler}>
                <div>
                    <label>Nombre:</label>
                    <input onChange={nombreHandler} type='text'></input>
                </div>

                <div>
                    <label>Apellidos:</label>
                    <input onChange={apellidosHandler} type='text'></input>
                </div>

                <div>
                    <label>Direccion de envio:</label>
                    <input onChange={direccionHandler} type='text'></input>
                </div>
                <Button variant='success' type='submit'>TRAMITAR PEDIDO</Button>

            </form> */}
            <Form onSubmit={submitHandler}>

                <Container>
                    <Row>
                        <Col sm={4}>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control onChange={nombreHandler} type='text'></Form.Control>
                        </Col>



                        <Col sm={4}>
                            <Form.Label>Apellidos</Form.Label>
                            <Form.Control onChange={apellidosHandler} type='text'></Form.Control>
                        </Col>


                        <Col sm={4}>
                            <Form.Label>Direccion de envio</Form.Label>
                            <Form.Control onChange={direccionHandler} type='text'></Form.Control>
                        </Col>

                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    {/* HASTA AQUI LOS CAMPOS DE RELLENAR */}
                    <Row>
                        <Col sm={6}>
                            <Button variant='success' type='submit'>TRAMITAR PEDIDO</Button>
                            <Link to="/productos">
                                <Button variant='info'>Volver a la seccion de pedidos</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>


            </Form>

        </>
    )
}

export default Formulario_pedido;