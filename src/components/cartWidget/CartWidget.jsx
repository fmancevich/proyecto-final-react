import React, { useContext } from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../../context/GlobalProvider';


const CartWidget = () => {

  const { contextItemsCart } = useContext(GlobalContext); 

  // const itemsCart = cantItemsCart()
  // console.log('itemsCart => ', itemsCart)

  return (

    <div className='cartWidget mx-5'>

        {contextItemsCart() > 0 ? 
          <Link to={'/cart'} >
            <FaShoppingCart size={20} color={'#eef5ff'} />&nbsp;&nbsp; 
            <span style={{color: '#88bafe'}}>{contextItemsCart()}</span>
          </Link>
      : 
          <></>     // nada
        }

    </div> 
   
  )
}

export default CartWidget;