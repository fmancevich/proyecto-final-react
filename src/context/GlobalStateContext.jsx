import React, { createContext, useState } from 'react'

const GlobalStateContext = ( {children} ) => {

    const [carrito, setCarrito] = useState([])


  return (
    <div>GlobalStateContext</div>
  )
}

export default GlobalStateContext