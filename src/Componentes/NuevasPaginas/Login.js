import axios from "axios";
import { useContext, useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useNavigate } from 'react-router-dom';
import ReactDOM from "react-dom";
import Historico from "./Historico";
import AutContext from "./AutContext";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [identificador, setIdentificador] = useState('');
    const navega2 = useNavigate();

    // const contextAut = useContext(AutContext);
    // la variable de arriba me esta creando como un puntero a esa varaibel Autcontext

    const submitHandler = (event) => {
        event.preventDefault();// esto es para que no se recargue la pagina

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
            // todo esto es lo que se  manda a nuestra peticion para logearnos
        }

        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAWo1c7yGffKdVw8c3kReQFK6sU5Dv56_Y', authData)
            .then((response) => {
                console.log(response);
                console.log(response.data.localId);
                // console.log(response.data.idToken);
                props.setId(response.data.localId);
                props.actualizarLogin(true, response.data.localId);
                props.setToken(response.data.idToken);



                // props.actualizarLogin(true, response.data);
                alert('Login completado');
                setEmail('');
                setPassword('');
                navega2('/productos');



            }).catch((error) => {
                alert('usuario incorrecto');
            })


    }

    const logoutHandler = () => {
        props.actualizarLogin(false, '');
        alert('sesion cerrada');

    }



    return (
        <>
            <h2>Rellene por favor el formulario para iniciar la sesion</h2>
            <Form onSubmit={submitHandler}>
                <Container>
                    <Row >
                        <Col>
                            <Form.Label >Email:</Form.Label>
                            <Form.Control onChange={(event) => setEmail(event.target.value)} type='email' value={email} />
                        </Col>
                        <Col >
                            <Form.Label>Password:</Form.Label>
                            <Form.Control onChange={(event) => setPassword(event.target.value)} type='password' value={password} />
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>

                    <Row>
                        <Col sm={4}>
                            <Button type="submit" variant="primary">Login</Button>
                            <Button onClick={logoutHandler} variant="warning">Logout</Button>

                        </Col>
                       
                        
                    </Row>

                </Container>
            </Form>
        </>
    )
}
export default Login;