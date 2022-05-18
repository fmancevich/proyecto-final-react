import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider'
import { BsFillCartXFill } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'
import { formatPriceNumber } from '../../utils/Utils'
// import './Cart.css';

const Cart = () => {

    const { contextCart, contextItemsCart, precioTotalCart, 
                                 removeFromCart, clearCart } = useContext(GlobalContext); 
   
    console.log(contextItemsCart(), precioTotalCart(), contextCart)

    const ListadoCarrito = () => {

        return (
            <div className='listado'>
                <div className="container-fluid pt-5">
                    <div className="row tituloListado fw-bold pd-2" >
                        <div className="col-1 text-center">Cantidad</div>
                        <div className="col-1 text-center">Código</div>
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
                                <div className="col-1 my-1" > 
                                    <button type="button" title="Eliminar Item"
                                            className="btn btn-primary py-1"
                                            onClick={() => removeFromCart(item.producto.codigo)}>
                                        <MdDelete />
                                    </button>
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
                <div className="btnVaciar pt-5" > 
                    <button type="button" className="btn btn-primary" 
                        onClick={() => clearCart()}>
                        <BsFillCartXFill />{" "}Vaciar carrito
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="cart" style={{ paddingTop: "30px" }}>
            <div className="container-fluid my-5 p-5 border">
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