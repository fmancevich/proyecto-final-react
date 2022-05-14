import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import axios from 'axios';
import Loader from '../Loader/Loader';

const ItemListContainer = ( {titulo, tipo} ) => {

  // console.log(`tipo ==> ${tipo}`);

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
      setProductos(response.data.productos)

    } catch (error) {
      console.error(error);
    }
  };

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    setTimeout(getProductos, 800);  
  // }, [tipo])  
  }, [])  

  // console.log('ItemListContainer productos', productos)

  return (
    <div className='itemListContainer'>
        <h1 style={{ padding: (0, 20) }} >{titulo}</h1>
        { productos.length > 0 ? 
            <ItemList productos={productos} tipo={tipo} />
        : 
            <Loader/>     // spinner
        }
    </div>
  )
};

export default ItemListContainer;