import React, { createContext, useState } from 'react'

export const GlobalContext = createContext('')

const GlobalProvider = ( {children} ) => {

    const [contextItemsCart, setContextItemsCart] = useState(0)
    // array donde se van a ir guardando
    const [contextCart, setContextCart] = useState([])

    // const cantItemsCart = () => { 
    //   console.log('contextCart.length => ', contextCart.length)
    //   return contextCart.length 
    // } 
    
    // devuelve si un producto ya existe en el carrito
    const isInCart = (codigo) => {
      if (contextItemsCart > 0) {
        return contextCart.findIndex(item => item.producto.codigo === codigo) >= 0
      } else {
        return false
      }
    }

    // agrega un producto al carrito y la cantidad
    const addToCart = (producto, cantidad) => {
      console.log(isInCart(producto.codigo))
      if (!isInCart(producto.codigo)) {
          // actualiza la cantidad de items total del carrito
          setContextItemsCart(contextItemsCart + cantidad)          
          // agrega el producto y la cantidad agregada al carrito 
          setContextCart([...contextCart, { producto, cantidad } ])    
          const mensaje = `Se agregaron ${JSON.stringify(cantidad)} items del producto` + 
                          `${producto.codigo} - ${producto.nombre} al carrito`
          console.log(mensaje)
          // alert(mensaje)  
          // return true
      } else {
          alert('El producto ya existe en el carrito')
          // return false
      }
    }

    // elimina un producto del carrito segun su codigo
    const removeToCart = (codigo) => {
      setContextCart(contextCart.filter(item => item.producto.codigo !== codigo)  )    
    }
  
    // vacia el carrito
    const clearCart = () => setContextCart([]) 

  return (
    <GlobalContext.Provider value={{contextItemsCart, contextCart,  
                                    isInCart, addToCart, removeToCart, clearCart}}>
        { children }
    </GlobalContext.Provider>
  )
}

export default GlobalProvider