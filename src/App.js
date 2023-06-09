import './App.css';
import Footer from './Componentes/UI/Footer';
import Header from './Componentes/UI/Header';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Productos from './Componentes/Productos/Productos';
import Confirmacion_pedido from './Componentes/Confirmacion_pedido';
import { Route, Routes } from 'react-router-dom';
import Continuar_pedido from './Componentes/Continuar_pedido';
import Formulario_pedido from './Componentes/Formulario_pedido';
import Agradecimiento from './Componentes/Agradecimiento';
import Login from './Componentes/NuevasPaginas/Login';
import Registro from './Componentes/NuevasPaginas/Registro';
import AutContext from './Componentes/NuevasPaginas/AutContext';
import Historico from './Componentes/NuevasPaginas/Historico';
import Lista from './Componentes/NuevasPaginas/Lista';
import Home from './Componentes/NuevasPaginas/Home';
import AboutUs from './Componentes/NuevasPaginas/AboutUs';

function App() {

    const [Lista_productos, setLista_productos] = useState([]);
    const [Precio_total, setPrecio_total] = useState(0);
    const [Pedido, setPedido] = useState([]);
    const [Iniciado, setIniciado] = useState(true);


    const [Lista_productos_pedido, setLista_productos_pedido] = useState([]);
    const [id,setId]=useState('');
    const [login, setLogin] = useState(false);// luego hay quee poner aqui un true y tal para ver que el usuario esta logeado
    const [token,setToken]=useState('');
    

    const actualizarLogin=(login,id) =>{
        setLogin(login);
        setId(id);
    }



    const inicializar_pedido = (elemento, longitud) => {
        if (elemento) {
            let iniciar = [];
            for (var i = 0; i < longitud; i++) {
                iniciar.push(0);
            };
            setPedido(iniciar);

            setIniciado(false);
        }
    }


    useEffect(() => {
        axios.get('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app//productos.json')
            .then((response) => {
                console.log(response.data);
                let arrayProductos = [];


                for (let key in response.data) {

                    arrayProductos.push({
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio,
                        imagen: response.data[key].imagen
                    })
                }
                setLista_productos(arrayProductos);

                inicializar_pedido(Iniciado, arrayProductos.length);
            })
    },[]);



    const Actualizar_precio_total = (precio, id, sumar) => {


        let copia = [];
        copia = Pedido;
        if (sumar) {
            copia[id] = copia[id] + 1;
        } else {
            if (copia[id] != 0) {
                copia[id] = copia[id] - 1;
            }
        }
        setPedido(copia);

        setPrecio_total(Math.round(Precio_total + precio));
    }

    const actualizar_lista_app = (productos) => {

        setLista_productos_pedido(productos);

    }

    const reiniciar_productos = () => {

       
            let reiniciar = [];
            for (var i = 0; i < Pedido.length; i++) {
                reiniciar.push(0);
            };
        setPedido(reiniciar);
        setPrecio_total(0);
    }





    const contenidoProductos =
        <>
            <Productos productos={Lista_productos} Actualizar_precio_total={Actualizar_precio_total} Pedido={Pedido} />
            <Confirmacion_pedido Precio_total={Precio_total} Pedido={Pedido} />
        </>


    return (
        <>
            {/* lo que hago con ese. Provider es proporcionar mi variable a toda la app envolviendo a mis consumidores */}
            {/* aunque lo haya inicializado ya, tengo que volver a darle un valor inicial aqui
            las primeras llaves son del json */}
            <AutContext.Provider value={{ login: login}}>
                <Header />
                <Routes>
                <Route path='login' element={<Login setId={setId} actualizarLogin={actualizarLogin} setToken={setToken}/>} />
                    <Route path='registro' element={<Registro />} />
                    <Route path='/' element={<Home/>} />
                    <Route path='/historico' element={<Historico id={id} login={login} token={token}/>} />
                    <Route path='/Continuar_pedido' element={<Continuar_pedido Precio_total={Precio_total} Pedido={Pedido} productos={Lista_productos} actualizar_lista_app={actualizar_lista_app} />} />
                    <Route path='/Formulario' element={<Formulario_pedido Lista_productos_pedido={Lista_productos_pedido} actualizarLogin={actualizarLogin} id={id} login={login} reiniciar={reiniciar_productos} Precio_total={Precio_total} />} />
                    <Route path='/Agradecimiento' element={<Agradecimiento />} />
                    <Route path='/productos' element={contenidoProductos} />
                    {/* <Route path='/about-us' element={<AboutUs/>} /> */}

                    


                </Routes>

                <Footer />
            </AutContext.Provider>
        </>
    );
}

export default App;
