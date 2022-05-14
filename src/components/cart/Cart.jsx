import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalProvider';

const Cart = () => {

    const { contextItemsCart, contextCart } = useContext(GlobalContext); 
    
    console.log(contextItemsCart, contextCart)

    const ListadoCarrito = () => {

        return (
            <div className="container pt-5">
                <div className="row tituloListado fw-bold pd-2 hidden" >
                    <div className="col-1 text-center">Cantidad</div>
                    <div className="col-1 text-center">Código</div>
                    {/* <div className="col-4 text-start">Nombre</div> */}
                    <div className="col-6 text-start">Descripcion</div>
                    <div className="col-2 text-end">Precio Unitario</div>
                    <div className="col-2 text-end">Total Producto</div>
                </div>
                <div>
                     {contextCart.map((item, index) => (
                            <div className="row text-secondary" key={index} >
                                <div className="col-1 text-center">{item.cantidad}</div>
                                <div className="col-1 text-center">{item.producto.codigo}</div>
                                {/* <div className="col-4 text-start">{item.producto.nombre}</div> */}
                                <div className="col-6 text-start">{item.producto.descripcion}</div>
                                <div className="col-2 text-end">${" "}{item.producto.precio}</div>
                                <div className="col-2 text-end">${" "}{(item.cantidad*item.producto.precio).toFixed(2)}</div>
                            </div>
                    ))
                    }
                </div>
            </div>

        )
    }

    return (
        <div className="cart">
            <div className="container m-5 p-4 border" >
                <h3>
                    Cantidad total de productos:{` ${contextItemsCart}`}
                </h3>
                { contextItemsCart > 0 ?
                    <ListadoCarrito/>
                : 
                    <h3>El carrito está vacio</h3>
                }
            </div>
        </div>
    )
  }
  
export default Cart