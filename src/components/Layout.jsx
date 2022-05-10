import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = () => {
  return (
    <div className='layout'>
        <Header/>

        <Outlet/>
         {/*<Route index element={<Home />} />  
            <Route path="/productos" element={<ItemListContainer />} />  
            <Route path="/producto/:codigo" element={<ItemDetail />} />  
            <Route path="/nosotros" element={<Nosotros />} />  
            <Route path="*" element={<Error />} />   
            El Outlet estaria remplazando a los routes que estan adentro del Route que carga el Layout */}
        <Footer/>
    </div>
  )
}

export default Layout