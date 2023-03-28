import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

function Historico(props) {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        // console.log('SE MONTA PRODUCTOS');
        // PARA METER CUALQUIER LOGICA, ENVOLVER EN FUNCION
        axios.get('https://dsm-react-demo-2023-7e01d-default-rtdb.europe-west1.firebasedatabase.app/historico.json?orderBy="$key"&equalTo="'+props.id+'"')
            .then((response) => {
                console.log(response.data);





            }).catch((error) => {
                alert('se ha producido un error');
                // esto es por si nos salra algun error en la base de datos
            })


    }, []);






  return(

    
    <p>Tu historico es...</p>
    
  )
}
export default Historico;