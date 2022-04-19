import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';


const CartWidget = () => {
  return (

    <div>
        <FaShoppingCart size={20} color={'#eef5ff'} /> 
        <span style={{color: '#5398fe'}}>&nbsp;Carrito</span>
    </div> 
   
  )
}

export default CartWidget;