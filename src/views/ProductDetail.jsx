import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import ItemDetailCointainer from '../components/itemDetailCointainer/ItemDetailCointainer'

const ProductDetail = () => {

  const location = useLocation()
  // const {codigo} = useParams()
  const {id} = useParams()

  //console.log("location",location)
  //console.log("params",params)
  
  return (
    <div className='productDetail'>
        {/* <ItemDetailCointainer codigo={codigo} /> */}
        <ItemDetailCointainer id={id} />
    </div>
  )
}

export default ProductDetail