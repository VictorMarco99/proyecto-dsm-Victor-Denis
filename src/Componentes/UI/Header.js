import { useContext } from 'react';
// import AutContext from '../../Store/AutContext';
import './Header.css';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

function Header() {

    // const contextAut = useContext(AutContext);
    return (
        <div className='Header'>
            <Nav className='justify-content-end'>
                <Nav.Item >
                    <Link to='/login'>Login</Link>
                </Nav.Item>
                <Nav.Item >
                    <Link to='/registro'>Registro</Link>
                </Nav.Item>
                <Nav.Item >
                    <Link to='/about-us'>Quienes Somos</Link> | {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/hisotrico'>Historico</Link> | {' '}
                </Nav.Item>
                <Nav.Item >
                    <Link to='/login'>Login</Link> | {' '}
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