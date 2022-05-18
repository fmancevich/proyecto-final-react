import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../Loader/Loader';

const ItemDetailCointainer = ({ codigo }) => {

  // console.log(`codigo: ${codigo}`);

  // const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState(null);

  // // obtiene el json de productos de public/data usando axios y try catch
  // const getProductos = async () => {
  //   try {
  //     const response = await axios.get('/data/productos.json')
  //     console.log('response.data.productos ==> ', response.data.productos)
  //     setProductos(response.data.productos);
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const getProductoPorId = async () => {
    try {
      const response = await axios.get('/data/productos.json')
      const productos = response.data.productos;
      // console.log('esto es lo que hay en productos...');
      // console.log(productos);

      const productoEncontrado = productos.find(item => item.codigo === codigo)
      // console.log(`productoEncontrado => ${JSON.stringify(productoEncontrado)}`)
      setProducto(productoEncontrado)
      
    } catch (error) {
      console.error(error);
    }
  };


  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    setTimeout(getProductoPorId, 500);      
  }, [])  


  return (
    <div className='itemDetailContainer container pt-5'>
        {producto ? 
            <ItemDetail producto={producto} /> 
        : 
          <Loader/>     // spinner
        }
    </div>
  )
}

export default ItemDetailCointainer;