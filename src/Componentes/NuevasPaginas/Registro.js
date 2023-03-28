import axios from "axios";
import { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import  ReactDOM  from "react-dom";
const Registro = (props) => {

    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');

    const submitHandler =(event)=>{
        event.preventDefault();// esto es para que no se recargue la pagina
        
        const authData ={
            email:email,
            password:password,
            returnSecureToken: true,
            // todo esto es lo que se  manda a nuestra peticion para logearnos
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAWo1c7yGffKdVw8c3kReQFK6sU5Dv56_Y',authData)
        .then((response)=>{
            console.log(response.data.localId);
            // props.actualizarLogin(true,response.data);
            alert('registro completado');
        }).catch((error)=>{
            alert('usuario incorrecto');
        })
    }


    return (
        // el onSubmit se pone aqui porque es cuando se envie el formulario
        <>
        <p>Rellene el formulario para registrarse</p>
        <Form onSubmit={submitHandler}> 
            <Container>
                <Row>
                    <Col><Form.Label >Email:</Form.Label>
                        <Form.Control onChange={(event)=>setEmail(event.target.value)} type='email' value={email} /></Col>
                    <Col><Form.Label>Password:</Form.Label>
                        <Form.Control onChange={(event)=>setPassword(event.target.value)} type='password' value={password} /></Col>

                    <Col><Button  type="submit" variant="primary">Registro</Button></Col>

                </Row>
            </Container>
        </Form>
        </>
    )
}
export default Registro;