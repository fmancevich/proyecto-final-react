import React from 'react';
import Item from '../item/Item';

const ItemList = (props) => {
  return (
    <div>
      <h1>{props.texto}</h1>
      <h3 className='subtitulo'>Productos</h3> 
      <Item />
    </div>
  )
}

export default ItemList;