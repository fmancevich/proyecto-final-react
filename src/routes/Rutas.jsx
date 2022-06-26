import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../views/Home'
// import ProductList from '../views/ProductList'
import ProductDetail from '../views/ProductDetail'
import ProductTipo from './../views/ProductTipo'
import Nosotros from '../views/Nosotros'
import Cart from '../components/cart/Cart'
import Checkout from '../components/cart/Checkout'
import Error from '../views/Error'

const Rutas = () => {
  return (
    <div className='rutas'>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}> 
                    <Route index element={<Home />} />  
                    {/* <Route path="/productos" element={<ProductList />} />   */}
                    <Route path="/lighting-net" element={<ProductTipo />} />  
                    <Route path="/proyecto-final-react" element={<ProductTipo />} />  
                    <Route path="/productos" element={<ProductTipo />} />  
                    <Route path="/tipo/:tipo" element={<ProductTipo />} />  
                    {/* <Route path="/producto/:codigo" element={<ProductDetail />} />   */}
                    <Route path="/producto/:id" element={<ProductDetail />} />  
                    <Route path="/nosotros" element={<Nosotros />} />  
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="*" element={<Error />} />  
                </Route>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Rutas