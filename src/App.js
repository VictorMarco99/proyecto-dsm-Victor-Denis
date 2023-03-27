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

function App() {

    const [Lista_productos, setLista_productos] = useState([]);
    const [Precio_total, setPrecio_total] = useState(0);
    const [Pedido, setPedido] = useState([]);
    const [Iniciado, setIniciado] = useState(true);
    const [Lista_productos_pedido, setLista_productos_pedido] = useState([]);



    const inicializar_pedido = (elemento,longitud) => {
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
        axios.get('https://proyecto-dsm-696fc-default-rtdb.europe-west1.firebasedatabase.app/productos.json')
            .then((response) => {
                //console.log(response.data);
                let arrayProductos = [];


                for (let key in response.data) {
   
                    arrayProductos.push({                
                        id: key,
                        nombre: response.data[key].nombre,
                        precio: response.data[key].precio
                    })
                }
                setLista_productos(arrayProductos);
             
                inicializar_pedido(Iniciado, arrayProductos.length);
           
            })
    });



    const Actualizar_precio_total = (precio, id,sumar) => {

        
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





    const contenidoProductos =
        <>
            <Productos productos={Lista_productos} Actualizar_precio_total={Actualizar_precio_total} />
            <Confirmacion_pedido Precio_total={Precio_total} Pedido={Pedido} />  
        </>


    return (
       <>
        <Header />
            <Routes>
                <Route path='login' element={<Login/>}/>
                <Route path='registro' element={<Registro/>}/>
                <Route path='/' element={contenidoProductos} />
                <Route path='/Continuar_pedido' element={<Continuar_pedido Precio_total={Precio_total} Pedido={Pedido} productos={Lista_productos} actualizar_lista_app={actualizar_lista_app} />} />      
                <Route path='/Formulario' element={<Formulario_pedido Lista_productos_pedido={Lista_productos_pedido} />} />
                <Route path='/Agradecimiento' element={<Agradecimiento/>} />    
            </Routes>

        <Footer />
       </>
  );
}

export default App;
