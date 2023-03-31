import axios from "axios";
import { useEffect, useState } from "react";
import Lista from "./Lista";
import Login from "./Login";

function Historico(props) {

  const [productos, setProductos] = useState([]);
  const [arrayHistorico, setArrayHistorico] = useState([]);
  const lista = [];

  useEffect(() => {
    if (props.login != false && props.id != '') {
      axios.get('https://dsm-2023-default-rtdb.europe-west1.firebasedatabase.app//pedidos.json?orderBy="$key"&equalTo="' + props.id + '"')
        .then((response) => {
          const items = []
          Object.keys(response.data[props.id]).forEach(key => {
            const childObj = response.data[props.id][key];
            childObj["id"] = key
            if (typeof childObj === 'object') {
                items.push(childObj);
            }
          });

          setArrayHistorico(items)
          // hasta aqui lo que tengo es un array con 3 json , de momento como en el get de los productos  
          // hago el . map abajo, para llamar a lista y que me devuelva en historico un div con los pedidos
          
        }).catch((error) => {
          /*alert('se ha producido un error');*/
          // esto es por si nos salra algun error en la base de datos
        })
      } else {
       /* alert('algo esta fallando');*/
      }
    },[]);// hasta aqui he separado cada archivo json

    const borrar_pedido = (clave) => {

       



       //const copia_historico = arrayHistorico.filter((elemento) => {
       //     return elemento.id != clave;

       //     console.log(copia_historico);

       //     alert('eeee');
       // })


        const copia_historico = arrayHistorico;


        const dale = copia_historico.filter((elemento) => {
            return elemento.id != clave;
        })

        setArrayHistorico(dale);



    }


    
  const listado = arrayHistorico.map((elemento) =>{
      return <Lista key={elemento.nombre} borrar_pedido={borrar_pedido} nombre={elemento.nombre["Nombre"]} apellidos={elemento.apellidos["Apellidos"]} precio_pedido={elemento.precio_pedido["Precio"]} direccion={elemento.direccion["Direccion"]} productos={elemento.productos} clave={elemento.id} id={props.id}  ></Lista>
  })
  
  console.log(arrayHistorico)
  return (

    <>
      {listado}
    </>

  )
}
export default Historico;