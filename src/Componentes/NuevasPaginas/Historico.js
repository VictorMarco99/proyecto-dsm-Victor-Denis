import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

function Historico(props) {

  const [productos, setProductos] = useState([]);
  const [arrayHistorico, setArrayHistorico] = useState([]);

  useEffect(() => {
    // console.log('SE MONTA PRODUCTOS');
    // PARA METER CUALQUIER LOGICA, ENVOLVER EN FUNCION
    // console.log(props.token);
    if (props.login != false && props.id != '') {
      console.log(props.id);
      console.log(props.login);
      axios.get('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app//pedidos.json?orderBy="$key"&equalTo="' + props.id + '"')
        .then((response) => {
          // console.log(response.data[props.id]);
          setArrayHistorico(response.data[props.id]);
        }).catch((error) => {
          alert('se ha producido un error');
          // esto es por si nos salra algun error en la base de datos
        })


    } else {
      alert('algo esta fallando');
    }


  }, []);






  return (

    <>
      <p>Tu historico es...</p>

      {/* {arrayHistorico.map((elemento) => {

        return (
          <div key={elemento.nombre}>
            <h2>{elemento.apellidos}</h2>
            <h2>{elemento.direccion}</h2>
          </div>

        )

      })} */}
    </>
  )
}
export default Historico;