import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Header'
// import Main from './../main/main';

const Layout = () => {
  return (
    <div className='layout'>
        <Header/>
          <div className='container-fluid' pt-5>
            <Outlet/>
            {/*<Route index element={<Home />} />  
                <Route path="/productos" element={<ItemListContainer />} />  
                <Route path="/producto/:codigo" element={<ItemDetail />} />  
                <Route path="/nosotros" element={<Nosotros />} />  
                <Route path="*" element={<Error />} />   
                El Outlet estaria remplazando a los routes que estan adentro del Route que 
                carga el Layout */}
          </div>
        <Footer/>
    </div>
  )
}

export default Layout