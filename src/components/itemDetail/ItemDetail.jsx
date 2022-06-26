import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsFillCartPlusFill, BsFillCartCheckFill, BsFillCartFill } from 'react-icons/bs';
import { GlobalContext } from '../../context/GlobalProvider';
import ItemCount from '../itemCount/ItemCount';
import { formatGoogleSharedUrl, formatPriceNumber } from '../../utils/Utils'
import './ItemDetail.css';

const ItemDetail = ( { producto } ) => {

  // console.log(JSON.stringify(producto));

  const blank = '\u00A0';

  const { addToCart, isInCart } = useContext(GlobalContext); 
  
  // const [enableAdd, setEnableAdd] = useState(true);
  // const [enableAdd, setEnableAdd] = useState(isInCart(producto.codigo));
  const [cantidad, setCantidad] = useState(0);

  let nombre = producto.nombre === undefined ? `${blank}` : producto.nombre 
  // let imagen = '/images/' + ( producto.imagen === undefined ? 'imagen_no_disponible.jpg' : producto.imagen);
  let imagen = ( producto.url === undefined ? '/images/imagen_no_disponible.jpg' 
                                            : formatGoogleSharedUrl(producto.url));
  let stock = producto.cantidad;


  const onAdd = (cantidad) => {
    // console.log(`ItemCount ${index} tiene ${cantidad} items`);
    setCantidad(cantidad);
  };

  const agregarAlCarrito = (cantidad) => {
    // const mensaje = `Se agregaran ${JSON.stringify(cantidad)} items del producto 
    //                  ${producto.codigo} - ${producto.nombre} al carrito`;
    // console.log(mensaje);
    // alert(mensaje);
    addToCart(producto, cantidad)
    // setEnableAdd(false)
  };

  const goToCart = () => {
    const mensaje = `Se finaliza la compra, redirecciona al carrito...`;
    // console.log(mensaje);
    // alert(mensaje);
  };

  const volver = () => {
    // console.log('ejecuta volver()...')
    window.history.back()
  }

  const Botones = () => {
    return (
      <div className='botones container d-flex justify-content-center gap-5 my-4'>
        <div className="boton">
            {/* { enableAdd ?  */}
            { !isInCart(producto.codigo) ? 
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
                    <BsFillCartCheckFill />{" "}Ir al carrito
                </Link>    {/* link a vista ProductDetail  */}
              </div>
            }
        </div>
        <div className="boton">
          <button className="btn btn-secondary" onClick={volver} >
            <BsFillCartFill/>{" "}Seguir comprando
          </button>
        </div>
      </div>
    )
  }

  return (

      <div className='itemDetail container pt-5'>
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
            {/* <div className="row centrado d-flex align-items-center" > */}
            <div className="row justify-content-around" >
              {/* Imagen producto */}
              <div className="col-md-4 text-center">
                <img width="200" height="200" src={imagen} />
              </div>
              {/* Detalle producto */}
              <div className="col-md-8 p-4 text-center">
                <p className="titulo fw-bold fs-4">{producto.titulo}</p> <br />
                <p className="descripcion fw-bold fs-5">Código: {` ${producto.codigo}`}</p>
                <p className="descripcion fs-5">{producto.descripcion}</p>
                <p className="precio fw-bold fs-4">{formatPriceNumber(producto.precio)}</p> <br />

                {/* contador cantidad producto */}
                <ItemCount initial={1} stock={stock} onAdd={onAdd} />
              </div>
            </div>
          </div>
          {/* Footer */}
          <div className="modal-footer">
            <Botones/>
          </div>

        </div>
      </div>
    );
  };

export default ItemDetail;