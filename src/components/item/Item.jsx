import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { BsFillCartPlusFill } from 'react-icons/bs';
import ItemCount from '../itemCount/ItemCount'

const Item = () => {

  const handleOnAdd = (cantidad) => {
    console.log(`${cantidad} items agregados al carrito`);
  }

  return (
    <div style={{ display: 'block', padding: 30, alignItems: 'center' }}>
      <Card className="text-center w-25" border="info">
        <Card.Header>Header del item</Card.Header>
        <Card.Body>
          <Card.Title>Nombre del item</Card.Title>
          <Card.Text>
            Descripción del item a comprar que puede ser lo mas largo que se nos ocurra.
          </Card.Text>
          <ItemCount stock={10} initial={1} onAdd={handleOnAdd}/>
        </Card.Body>
        <Card.Footer className="text-muted">
          <Button variant="primary"><BsFillCartPlusFill /> Agregar al carrito</Button>
        </Card.Footer>
      </Card>    
    </div>
  )
}

export default Item;