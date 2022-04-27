import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import ItemCount from '../itemCount/ItemCount'

const Item = ({ header, nombre, descripcion }) => {

  const handleOnAdd = (cantidad) => {
    console.log(`${cantidad} items agregados al carrito`);
  };

  return (
    <div style={{ display: "block", padding: 30, alignItems: "center" }}>
      <Card className="text-center w-100" border="info">
        <Card.Header>{header}</Card.Header>
        <Card.Img variant="top" src="./led-bulb.jpg" style={{ padding: 20 }} />        
        <Card.Body>
          <Card.Title>{nombre}</Card.Title>
          <Card.Text>{descripcion}</Card.Text>
          <ItemCount stock={10} initial={1} onAdd={handleOnAdd} />
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary"><BsFillCartPlusFill /> Agregar al carrito</Button>
        </Card.Footer>
      </Card>    
    </div>
  )
};

export default Item;