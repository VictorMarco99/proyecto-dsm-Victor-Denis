import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ReactDOM from "react-dom";   

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();// esto es para que no se recargue la pagina

        const authData = {
            email: email,
            password: password,
            returnSecureToken: true,
            // todo esto es lo que se  manda a nuestra peticion para logearnos

        }
        alert('hola');
        console.log(email,password);
    }




    return (
        <>
        <p>ESte es mi orden de prueba</p>
        <Form onSubmit={submitHandler}>
            <Container>
                <Row>
                    <Col><Form.Label >Email:</Form.Label>
                        <Form.Control onChange={(event) => setEmail(event.target.value)} type='email' value={email} /></Col>
                    <Col><Form.Label>Password:</Form.Label>
                        <Form.Control onChange={(event) => setPassword(event.target.value)} type='password' value={password} /></Col>

                    <Col><Button  type="submit" variant="primary">Login</Button></Col>
                    {/* <Col><Button type="submit" onClick={logoutHandler} variant="warning">Logout</Button></Col> */}

                </Row>
            </Container>
        </Form>
        </>
    )
}
export default Login;