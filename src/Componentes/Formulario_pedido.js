import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


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
        navega('/Agradecimiento');


    }

    return (
        <>          
            <h1>RELLENE EL FORMULARIO:</h1>
            <form onSubmit={submitHandler}>
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
                <button type='submit'>TRAMITAR PEDIDO</button>
                
            </form>
           

            <div>---------------------------</div>
            <a href="/">
                <button>Volver a la seccion de pedidos</button>
            </a>
        </>
    )
}

export default Formulario_pedido;