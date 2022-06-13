import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import ItemDetail from '../itemDetail/ItemDetail';
import Loader from '../loader/Loader';

// Firebase
import { db } from '../../services/firebase'
import { doc, getDoc } from "firebase/firestore"

const ItemDetailCointainer = ({ id }) => {

  // console.log('codigo: ', codigo);
  // console.log('id: ', id);

  const [producto, setProducto] = useState();

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
    <div className='itemDetailContainer container p-5'>
        {producto ? 
          <ItemDetail producto={producto} /> 
        : 
          <Loader/>     // spinner
        }
    </div>
  )
}

export default ItemDetailCointainer;