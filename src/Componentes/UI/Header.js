import { useContext } from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AutContext from '../NuevasPaginas/AutContext';
import './Header.css';

function Header() {
    const contextAut = useContext(AutContext);
    // la variable de arriba me esta creando como un puntero a esa varaibel Autcontext
    return (
        <div className='Header'>
            <Nav className='justify-content-end'>
                <Nav.Item >
                    <Link to='/'>Inicio</Link> | {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/productos'>Productos</Link>| {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/login'>Login</Link>| {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/registro'>Registro</Link>| {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/about-us'>Quienes Somos</Link> | {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/historico'>Historico</Link> | {' '}
                </Nav.Item>
                {/* <Nav.Item >
                    <Link to='/contact?sede=Pamplona&persona=Julián'>Contacto</Link>| {' '}
                </Nav.Item> */}
            </Nav>
        </div>
        // lo que hace ese contextAut .login es que si 
        // mi variable login es true, muestra ese texto
        // cambiar es valor en App

    )
}

export default Header;