import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider'
import Formulario from './../formulario/Formulario';

const Checkout = () => {

  const { contextCart, precioTotalCart } = useContext(GlobalContext); 

  return (
    <div className="checkout py-5">
      <div className="buyer container py-5">
          <Formulario itemsCompra={contextCart} totalCompra={precioTotalCart()} />
      </div>
    </div>
  )
}

export default Checkout