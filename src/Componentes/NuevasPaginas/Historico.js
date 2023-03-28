import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

function Historico(props) {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    // console.log('SE MONTA PRODUCTOS');
    // PARA METER CUALQUIER LOGICA, ENVOLVER EN FUNCION
    // console.log(props.token);
    if (props.login != false && props.id != '') {
      axios.get('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app//pedidos.json?orderBy="$key"&equalTo="' + props.id + '"')
        .then((response) => {
          console.log(response.data);
        }).catch((error) => {
          alert('se ha producido un error');
          // esto es por si nos salra algun error en la base de datos
        })


    } else {
      alert('algo esta fallando');
    }


  }, []);






  return (


    <p>Tu historico es...</p>

  )
}
export default Historico;