import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage/HomePage'
import Navigation from 'components/Navigation/Navigation'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import AboutPage from 'pages/AboutPage/AboutPage'
import ContactPage from 'pages/ContactPage/ContactPage'
import HeaderMobile from 'components/HeaderMobile/HeaderMobile'
import ShopPage from 'pages/ShopPage/ShopPage'
import ShoppingCartPage from 'pages/ShoppingCartPage/ShoppingCartPage'
import ProductDetailPage from 'pages/ProductDetailPage/ProductDetailPage'
import Message from 'components/Message/Message'
import ScrollToTop from 'components/ScrollToTop/ScrollToTop'
import ToTopButton from 'components/ToTopButton/ToTopButton'
import CheckoutPage from 'pages/CheckoutPage/CheckoutPage'

function MainLayout() {
    return (
        <>
        <header>
            <Header/>
            <HeaderMobile/>
        </header>
        <nav><Navigation/></nav>
        <main>
            <div className='main-layout'>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='home' element={<HomePage/>}/>
                    <Route path='about' element={<AboutPage/>}/>
                    <Route path='contact' element={<ContactPage/>}/>
                    <Route path='shop/*'>
                        <Route path='' element={<ShopPage/>}/>
                        <Route path='product' element={<ProductDetailPage/>}/>
                    </Route> 
                    <Route path='shopping-cart' element={<ShoppingCartPage/>}/>
                    <Route path='checkout' element={<CheckoutPage/>}/>
                </Routes>
                <Message/>
                <ToTopButton/>
            </div>
        </main>
        <footer><Footer/></footer>
        <ScrollToTop/>
      </>
    )
}

export default MainLayout
