import React from 'react';
// import { Button } from 'react-bootstrap';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ initial = 1, stock, onAdd }) => {

  const [cantidad, setCantidad] = useState(initial);

  // console.log('onAdd(cantidad)...', cantidad);
  onAdd(cantidad);

  const decrement = () => {
    // console.log('decremento...', cantidad);
    if (cantidad > 1) {
      setCantidad(cantidad - 1);  
    }
  };

  const increment = () => {
    // console.log('incremento...', cantidad);
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  return (
    <div className='itemCount'>
      <div className='buttonsQuantity'>
        <button type="button" className='buttonSign' disabled={cantidad <= 1} 
                variant="text" onClick={decrement} 
                style={{ background: "none", border: "none", cursor: "pointer" }}> - </button>
        <p className='contador'>{cantidad}</p>
        <button type="button" className='buttonSign' disabled={cantidad >= stock} 
                variant="text" onClick={increment} 
                style={{ background: "none", border: "none", cursor: "pointer" }}> + </button>
      </div>
    </div>
  )
};

export default ItemCount;