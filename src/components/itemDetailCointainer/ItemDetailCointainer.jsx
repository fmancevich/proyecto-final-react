import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';

// Firebase
import { db } from '../../services/firebase'
import { doc, getDoc } from "firebase/firestore"

// const ItemDetailCointainer = ({ codigo }) => {
const ItemDetailCointainer = ({ id }) => {

  // console.log('codigo: ', codigo);
  // console.log('id: ', id);

  // const [productos, setProductos] = useState([]);
  const [producto, setProducto] = useState();

  // const getProductoPorId = async () => {
  //   try {
  //     const response = await axios.get('/data/productos.json')
  //     const productos = response.data.productos;
  //     // console.log('esto es lo que hay en productos...');
  //     // console.log(productos);

  //     const productoEncontrado = productos.find(item => item.codigo === codigo)
  //     // console.log(`productoEncontrado => ${JSON.stringify(productoEncontrado)}`)
  //     setProducto(productoEncontrado)
      
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };


  const getProductoPorId = async () => {

    const item = doc(db, 'productos', id)

    try {
        // const docSnapshot = await getDoc(item)
        const docSnapshot = await getDoc(item)
        if (docSnapshot.exists()) {
          setProducto({id: docSnapshot.id, ...docSnapshot.data()})
        }
    } catch (error) {
        console.log(error);
    }
  };

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    getProductoPorId();      
  }, [id])  


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