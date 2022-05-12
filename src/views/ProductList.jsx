import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemListContainer from './../components/itemListContainer/ItemListContainer';

// No se esta usando fue reemplazado por ProductTipo.jsx (sin tipo significa => TODOS)
const ProductList = () => {
  // const location = useLocation()
  // const {codigo} = useParams()

  //console.log("location",location)
  //console.log("params",params)
  
  return (
    <div className='productDetail'>
        <ItemListContainer titulo="lighting .net ... la tienda digital que te ilumina..." />
    </div>
  )
}

export default ProductList