import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemListContainer from './../components/itemListContainer/ItemListContainer';

const ProductTipo = () => {
  const location = useLocation()
  const {tipo} = useParams()

  // console.log('location => ', location)
  // console.log('tipo => ', tipo)
  
  return (
    <div className='productTipo'>
        <ItemListContainer titulo="lighting .net ... la tienda digital que te ilumina..." 
                           tipo={tipo} />
    </div>
  )
}

export default ProductTipo