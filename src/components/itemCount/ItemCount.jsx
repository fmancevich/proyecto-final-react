import React from 'react';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock = 1, initial = 1, onAdd }) => {

  const [cantidad, setCantidad] = useState(initial);

  const decrement = () => {
    // console.log('decremento...', cantidad);
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  };

  const increment = () => {
    // console.log('incremento...', cantidad);
    if (cantidad < stock)
    setCantidad(cantidad + 1)
  };

  return (
    <div className='buttons'>
      <div className='buttonsQuantity'>
        <Button className='buttonSign' variant="text" onClick={decrement} > - </Button>
        {/* <h6>{cantidad}</h6> */}
        <p className='contador'>{cantidad}</p>
        <Button className='buttonSign' variant="text" onClick={increment} > + </Button>
      </div>
    </div>
  )
};

export default ItemCount;