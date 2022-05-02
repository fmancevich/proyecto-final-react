import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
import axios from 'axios';

const ItemListContainer = ( {texto} ) => {

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

// obtiene el json de productos de public/data usando axios
const getProductos = async () => {
  await axios.get('data/productos.json')
    .then(response => {
      // console.log('response.data ==> ', response.data.productos)
      setProductos(response.data.productos);
    })
    .catch(error => console.error(error));
}

  useEffect(() => {
    getProductos()        // obtiene lista de productos
  }, [])  

  return (
    <div className='itemListContainer'>
      <h1 style={{ padding: (0, 20) }} >{texto}</h1>
      <h3 className='subtitulo'>Productos</h3> 
      <ItemList productos={productos} />
    </div>
  )
};

export default ItemListContainer;