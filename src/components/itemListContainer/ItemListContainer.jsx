import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import axios from 'axios';

const ItemListContainer = ( {titulo, tipo} ) => {

  const [productos, setProductos] = useState([]);

  // // obtiene el json de productos de public/data usando fetch api
  // const getProductos = () => {
  //   fetch('data/productos.json', 
  //   { headers : {'Content-Type': 'application/json', 'Accept': 'application/json' }}
  //   )
  //   .then(response => {
  //     // console.log('response ==> ', response)
  //     return response.json();
  //   })
  //   .then(data => {
  //     // console.log('data ==> ', data.productos);
  //     setProductos(data);
  //   })
  //   .catch(error => console.error(error));
  // }

  // // obtiene el json de productos de public/data usando axios y then / catch
  // const getProductos = async () => {
  //   await axios.get('./data/productos.json')
  //     .then(response => {
  //       // console.log('response.data ==> ', response.data.productos)
  //       setProductos(response.data.productos);
  //     })
  //     .catch(error => console.error(error));
  // }

  // obtiene el json de productos de public/data usando axios y try catch
  const getProductos = async () => {
    try {
      const response = await axios.get('/data/productos.json')
      // console.log('response.data.productos ==> ', response.data.productos)

      console.log(`tipo ==> ${tipo}`)

      if (tipo === undefined) {           // no hay filtro
        setProductos(response.data.productos);
      } else {                           // filtra por tipo
        setProductos(response.data.productos.filter(item => item.tipo === tipo));
      }
    } catch (error) {
      console.error(error);
    }
  };

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    setTimeout(getProductos, 1000);  
  }, [])  

  return (
    <div className='itemListContainer'>
      <h1 style={{ padding: (0, 20) }} >{titulo}</h1>
      <h3 className='subtitulo'>
          {
            {
              'lampara': 'Lámparas',
              'luminaria': 'Luminarias',                                                    
              'proyector': 'Proyectores',
              undefined: 'Todos los Productos'
            } [tipo]
          }
      </h3> 
      <ItemList productos={productos} />
    </div>
  )
};

export default ItemListContainer;