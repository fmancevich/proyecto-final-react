import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider'
import { Link } from 'react-router-dom';
import { BsFillCartFill, BsBagCheckFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { formatPriceNumber } from '../../utils/Utils'
// import Formulario from './../formulario/Formulario';

const Cart = () => {

    const { contextCart, contextItemsCart, precioTotalCart, 
                                 removeFromCart, clearCart } = useContext(GlobalContext); 

    const goToCheckout = () => {
        const mensaje = `Se finaliza la compra, redirecciona al checkout...`;
        // console.log(mensaje);
        // alert(mensaje);
      };
    
    const Botones = () => {
        return (
            // <div className="botones container d-flex justify-content-end gap-5 my-4">
            <div className="botones container d-flex gap-5 my-4">
                <div className="boton">
                    <Link to={`/checkout`} className="btn btn-success"
                        onClick={() => goToCheckout()}>
                        <BsBagCheckFill />{" "}Finalizar compra
                    </Link>    {/* link al componente Checkout  */}
                </div>
                <div className="boton"> 
                    <button type="button" className="btn btn-danger" 
                        onClick={() => clearCart()}>
                        <BsFillCartFill />{" "}Vaciar carrito
                    </button>
                </div>
            </div>
        )
    }

    const ListadoCarrito = () => {

        return (
            <div className='cart'>
                <div className='listado'>
                    <div className="container-fluid pt-5">
                        <div className="row tituloListado fw-bold pb-2" >
                            <div className="col-1 text-center overflow-hidden">Cantidad</div>
                            <div className="col-1 text-center overflow-hidden">Código</div>
                            <div className="col-5 text-start">Descripcion</div>
                            <div className="col-2 text-end">Precio Unitario</div>
                            <div className="col-2 text-end">Total Producto</div>
                        </div>
                        <div>
                            {contextCart.map((item, index) => (
                                <div className="row text-secondary align-items-center" key={index} >
                                    <div className="col-1 text-center">{item.cantidad}</div>
                                    <div className="col-1 text-center">{item.producto.codigo}</div>
                                    <div className="col-5 text-start">{item.producto.descripcion}</div>
                                    <div className="col-2 text-end">{formatPriceNumber(item.producto.precio)}</div>
                                    <div className="col-2 text-end">{formatPriceNumber((item.cantidad * item.producto.precio))}</div>
                                    <div className="col-1" > 
                                        <div className="btnEliminar">
                                           <button type="button" title="Eliminar Item"
                                                   className="btn btn-primary"
                                                   onClick={() => removeFromCart(item.producto.codigo)}>
                                                <MdDelete />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                            }  
                        </div>
                        <div className="row pieListado fw-bold pt-2" >
                            <div className="col-9 text-end">
                                TOTAL :
                            </div>
                            <div className="col-2 text-end">
                                {formatPriceNumber(precioTotalCart())}
                            </div>
                        </div>
                    </div>
                    <div className="botones align-items-center py-4">
                        <Botones/>
                    </div>
                </div>
            </div>
        )
    }
    
    return (
        <div className="cart pt-5 px-3" >
            {/* <div className="container-fluid my-5 p-5 border"> */}
            <div className="container-fluid my-5 pt-5 border">
                <h3 >
                    Cantidad total de productos:{` ${contextItemsCart()}`}
                </h3>
                { contextItemsCart() > 0 ?
                    <ListadoCarrito/>
                : 
                    <h3>El carrito está vacio</h3>
                }
            </div>
        </div>
    )
  }
  
export default Cart