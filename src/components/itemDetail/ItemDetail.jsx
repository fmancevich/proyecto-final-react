import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill, BsFillCartCheckFill } from 'react-icons/bs';
import { GlobalContext } from '../../context/GlobalProvider';
import ItemCount from '../itemCount/ItemCount';
import './ItemDetail.css';

const ItemDetail = ( { producto } ) => {

  // console.log(JSON.stringify(producto));

  const blank = '\u00A0';

  const { addToCart } = useContext(GlobalContext); 
  
  // const [itemsCarrito, setItemsCarrito] = useState(0);
  const [enableAdd, setEnableAdd] = useState(true);
  const [cantidad, setCantidad] = useState(0);
  const [state, setState] = useState(producto);

  let nombre = producto.nombre === undefined ? `${blank}` : producto.nombre 
  let imagen = '/images/' + ( producto.imagen === undefined ? 'imagen_no_disponible.jpg' : producto.imagen);
  let stock = producto.cantidad;


  const onAdd = (cantidad) => {
    // console.log(`ItemCount ${index} tiene ${cantidad} items`);
    setCantidad(cantidad);
  };

  const agregarAlCarrito = (cantidad) => {
    const mensaje = `Se agregaran ${JSON.stringify(cantidad)} items del producto 
                     ${producto.codigo} - ${producto.nombre} al carrito`;
    console.log(mensaje);
    // alert(mensaje);
    addToCart(state, cantidad)
    setEnableAdd(false)
  };

  const goToCart = () => {
    const mensaje = `Se finaliza la compra, redirecciona al carrito...`;
    console.log(mensaje);
    // alert(mensaje);
  };

  const volver = () => {
    // console.log('ejecuta volver()...')
    window.history.back()
  }

  return (

      <div className='itemDetail'>
        <div className="content">
          {/* Header */}
          <div className="modal-header">
            <p className="modal-title fw-bold fs-4" id="staticBackdropLabel">{nombre}</p>
            <button type="button" className="close" onClick={volver}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          {/* Body */}
          <div className="modal-body" >
            <div className="row centrado" >
              {/* Imagen producto */}
              <div className="col-sm-4">
                <img width="200" height="200" src={imagen} />
              </div>
              {/* Detalle producto */}
              <div className="col-sm-8 p-4">
                <p className="titulo fw-bold fs-4">{producto.titulo}</p> <br />
                <p className="descripcion fw-bold fs-5">Código: {` ${producto.codigo}`}</p>
                <p className="descripcion fs-5">{producto.descripcion}</p>
                <p className="precio fw-bold fs-4">${producto.precio}</p> <br />

                {/* contador cantidad producto */}
                <ItemCount initial={1} stock={stock} onAdd={onAdd} />
                
                {/* botones condicionales */}
                {/* { cantidad > 0 ?  */}
                { enableAdd ? 
                  <div className="btnAdd" > 
                    <button type="button" className="btn btn-primary" 
                            // onClick={() => handleOnAdd(itemsCarrito)}>
                            onClick={() => agregarAlCarrito(cantidad)}>
                        <BsFillCartPlusFill />{" "}Agregar al carrito
                    </button>
                  </div>
                : 
                  <div className="btnCart" > 
                    <Link to={`/cart`} className="btn btn-warning"
                            onClick={() => goToCart()}>
                        <BsFillCartCheckFill />{" "}Finalizar compra
                    </Link>    {/* link a vista ProductDetail  */}
                  </div>
                }
              </div>
            </div>
          </div>
          {/* Footer */}
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