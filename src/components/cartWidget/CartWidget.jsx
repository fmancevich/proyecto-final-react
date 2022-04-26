import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';


const CartWidget = (props) => {
  return (

    <div>
        <FaShoppingCart size={20} color={'#eef5ff'} /> 
        <span style={{color: '#88bafe'}}>&nbsp;{props.cantItems}</span>
    </div> 
   
  )
}

export default CartWidget;