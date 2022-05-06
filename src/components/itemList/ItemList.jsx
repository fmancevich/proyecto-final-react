import React from 'react';
import Item from '../item/Item';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = ( {productos} ) => {

  // console.log('productos ==> ', productos);
  // const blank = '\u00A0';
  
  return (
    <div className='itemList'>
      <Container>
        <Row>
          { productos.length > 0 ? (
              productos.map((producto, index) => (
                <Col lg={4} sm={6} xs={12} key={index} >
                  <Item index={index}
                        producto={producto}
                        // nombre={producto.nombre === undefined ? `${blank}` : producto.nombre } 
                        // descripcion={producto.descripcion} 
                        // titulo={producto.titulo} 
                        // imagen={'images/' + ( producto.imagen === undefined ? 'imgen_no_disponible.jpg' : producto.imagen) } 
                        // stock={producto.cantidad} 
                  />
                </Col>
              ))
          ) : (
            <h1>Cargando...</h1>
          )}
        </Row>
      </Container>
    </div>
  )
};

export default ItemList;