import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemDetail from '../itemDetail/ItemDetail';

const ItemDetailCointainer = ({ index, producto }) => {

  // console.log(index, producto);

  // const [productoDetail, setProductoDetail] = useState([producto]);

  // // obtiene el producto segun el index 
  // const getProductoPorId = async () => {
  //   await axios.get('./data/productos.json')
  //     .then(response => {
  //       // console.log('response.data ==> ', response.data.productos)
  //       setProducto(response.data.productos);
  //     })
  //     .catch(error => console.error(error));
  // }

  // useEffect(() => {
  //   getProductoPorId(index)        // obtiene lista de productos
  // }, [])  


  return (
    <div className='itemDetailContainer'>

        <ItemDetail index={index} producto={producto} />

    </div>
  )
}

export default ItemDetailCointainer;