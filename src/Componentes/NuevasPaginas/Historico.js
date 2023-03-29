import axios from "axios";
import { useEffect, useState } from "react";
import Login from "./Login";

function Historico(props) {

  const [productos, setProductos] = useState([]);
  const [arrayHistorico,setArrayHistorico]=useState({});

  useEffect(() => {
    // console.log('SE MONTA PRODUCTOS');
    // PARA METER CUALQUIER LOGICA, ENVOLVER EN FUNCION
    // console.log(props.token);
    if (props.login != false && props.id != '') {
      // console.log(props.id);
      // console.log(props.login);
      axios.get('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app//pedidos.json?orderBy="$key"&equalTo="' + props.id + '"')
        .then((response) => {
          // console.log(response.data[props.id]);


          const pedido=response.data[props.id];
          
          pedido.array.forEach(element => {
            
          });
          // for (let key in response.data[props.id]) {
            
          //   pedido.push({
          //     id:key,
          //     nombre: response.data[props.id][key].nombre,
          //     apellido: response.data[props.id][key].apellido,
          //     direccion:response.data[props.id][key].direccion,
          //     precio: response.data[props.id][key].precio
          //   })
          //   console.log(pedido);
            // setArrayHisotrico(pedido);
            // console.log(arrayHistorico);

          // }


          


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