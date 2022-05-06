import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import ItemCount from '../itemCount/ItemCount'
import ItemDetailContainer from '../itemDetailCointainer/ItemDetailCointainer';

const Item = ({ index, producto }) => {

  const blank = '\u00A0';

  // console.log(nombre, descripcion, titulo, imagen, stock)
  const [itemsCarrito, setItemsCarrito] = useState(0);

  let nombre = producto.nombre === undefined ? `${blank}` : producto.nombre 
  let descripcion = producto.descripcion;
  // let titulo = producto.titulo; 
  let imagen = 'images/' + ( producto.imagen === undefined ? 'imgen_no_disponible.jpg' : producto.imagen);
  let stock = producto.cantidad;

  const onAdd = (cantidad) => {
    // console.log(`ItemCount ${index} tiene ${cantidad} items`);
    setItemsCarrito(cantidad);
  };

  const handleOnAdd = (itemsCarrito) => {
    console.log(`Se agregaron ${JSON.stringify(itemsCarrito)} items del producto ${index} al carrito`);
  };

  return (
    <div className="item" style={{ display: "block", padding: 30, alignItems: "center" }}>
      <Card className="text-center w-100" border="info" >
        <Card.Header style={{ fontWeight: 500 }}>
            {nombre}
        </Card.Header>
        <Card.Img variant="top" src={imagen} style={{ padding: 20 }} />        
        <Card.Body>
          <Card.Text style={{ height: "3rem" }}>{descripcion}</Card.Text>
          <ItemCount initial={1} stock={stock} onAdd={onAdd} />
        </Card.Body>
        <Card.Footer className="text-muted">
          {/* <Button variant="primary" onClick={() => handleOnAdd(itemsCarrito)}><BsFillCartPlusFill /> Agregar al carrito</Button> */}
          <ItemDetailContainer index={index} producto={producto} />
        </Card.Footer> 
      </Card> 

    </div>
  )

};

export default Item;