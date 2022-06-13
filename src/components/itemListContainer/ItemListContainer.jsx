import { useState, useEffect } from 'react';
import ItemList from '../itemList/ItemList';
// import axios from 'axios';
import Loader from '../loader/Loader';

// Firebase
import { db } from '../../services/firebase'
import { collection, getDocs, query, where, orderBy } from "firebase/firestore"

const ItemListContainer = ( {titulo, tipo} ) => {

  // console.log('tipo ==> ', tipo);

  const [productos, setProductos] = useState([]);

  // obtiene la collection 'productos' del cloude firestore de Firebase
  const getProductos = async (tipo) => {

    const coleccion = collection(db, 'productos')

    try {

      if (tipo === undefined) {           // no hay filtro (todos los productos)
        // var data = await getDocs(coleccion)
        var q = query(coleccion, orderBy("tipo"), orderBy("subtipo"), orderBy("codigo"))
      } else {                           // filtra por tipo
        var q = query(coleccion, where("tipo", "==", tipo), orderBy("subtipo"), orderBy("codigo"))
      }

      const data = await getDocs(q)
              
      // console.log(data.docs.map(doc => doc = {id: doc.id, ...doc.data()}))
      setProductos(data.docs.map(doc => doc = {id: doc.id, ...doc.data()}))

    } catch (error) {
      console.log(error);
    }
  };

  // obtiene lista de productos simulando que tarda 3 segundos
  useEffect(() => {
    // setTimeout(getProductos, 1000);  
    getProductos(tipo);  
  }, [tipo])  
  // }, [])  

  // console.log('ItemListContainer productos', productos)

  return (
    <div className='itemListContainer container pt-5'>
        <h1 style={{ padding: (0, 20), textAlign: "center" }} >{titulo}</h1>
        { productos.length > 0 ? 
            <ItemList productos={productos} tipo={tipo} />
        : 
            <Loader/>     // spinner
        }
    </div>
  )
};

export default ItemListContainer;