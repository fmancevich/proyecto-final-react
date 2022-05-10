import React, { useState, useDispatch } from 'react';
import { BsFillCartPlusFill } from 'react-icons/bs';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ( { producto } ) => {

  console.log(JSON.stringify(producto));

  const blank = '\u00A0';

  // console.log(nombre, descripcion, titulo, imagen, stock)
  const [itemsCarrito, setItemsCarrito] = useState(0);

  let nombre = producto.nombre === undefined ? `${blank}` : producto.nombre 
  let imagen = '/images/' + ( producto.imagen === undefined ? 'imagen_no_disponible.jpg' : producto.imagen);
  let stock = producto.cantidad;


  const onAdd = (cantidad) => {
    // console.log(`ItemCount ${index} tiene ${cantidad} items`);
    setItemsCarrito(cantidad);
  };

  const handleOnAdd = (itemsCarrito) => {
    const mensaje = `Se agregaron ${JSON.stringify(itemsCarrito)} items del producto ${producto.codigo} al carrito`;
    console.log(mensaje);
    alert(mensaje);
  };

  const volver = () => {
    // console.log('ejecuta volver()...')
    window.history.back()
  }

  return (

      <div className='itemDetail'>

            <div className="content">

              <div className="modal-header">
                <h5 className="modal-title" id="staticBackdropLabel">{nombre}</h5>
                {/* <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close" >
                  <span aria-hidden="true">&times;</span>
                </button> */}
              </div>

              <div className="modal-body" >
                <div className="row centrado" >

                  <div className="col-sm-4">
                    <img width="170" height="170" src={imagen} />
                  </div>
    
                  <div className="col-sm">
                    <h2 className="price">{producto.titulo}</h2> <br />
                    <p className="lead">{producto.descripcion}</p>
                    <h4 className="price">${producto.precio}</h4> <br />

                    <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                    <div className="btnAdd" > 
                      <button type="button" className="btn btn-primary" 
                              onClick={() => handleOnAdd(itemsCarrito)}>
                          <BsFillCartPlusFill />{" "}Agregar al carrito
                      </button>
                    </div>

                  </div>

                </div>
              </div>
    
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={volver} >
                    Volver
                </button>
              </div>

            </div>

      </div>
    );
  };

export default ItemDetail;