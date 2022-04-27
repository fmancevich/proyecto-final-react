import React from 'react';
import Item from '../item/Item';
import { Container, Row, Col } from 'react-bootstrap';

const ItemList = (props) => {
  return (
    <div>
      <h1>{props.texto}</h1>
      <h3 className='subtitulo'>Productos</h3> 
      <Container>
        <Row>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item1" nombre="Nombre del item1" 
                  descripcion="Descripción del item1 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item2" nombre="Nombre del item2" 
                  descripcion="Descripción del item2 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item3" nombre="Nombre del item3" 
                  descripcion="Descripción del item3 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item4" nombre="Nombre del item4" 
                  descripcion="Descripción del item4 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item5" nombre="Nombre del item5" 
                  descripcion="Descripción del item5 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
          <Col lg={4} sm={6} xs={12} >
            <Item header="Header del item6" nombre="Nombre del item6" 
                  descripcion="Descripción del item6 a comprar que puede ser lo mas largo que se nos ocurra." />
          </Col>
        </Row>
      </Container>
    </div>
  )
};

export default ItemList;