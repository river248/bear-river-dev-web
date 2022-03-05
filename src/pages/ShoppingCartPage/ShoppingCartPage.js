/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './ShoppingCartPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import ShoppingCart from 'components/ShoppingCart/ShoppingCart'
import TotalPrice from 'components/TotalPrice/TotalPrice'

function ShoppingCartPage() {

    const navigate = useNavigate()

    return (
        <>
            <TitlePage pageName={'Shopping cart'}/>
            <div className='shopping-cart-container'>
                <div className='left-shopping-cart-container'>
                    <ShoppingCart/>
                    <div className='bottom-left-shopping-cart-container'>
                        <Link to={'/shop'}>continue shopping</Link>
                        {/* <span>update cart</span> */}
                    </div>
                </div>
                <div className='right-shopping-cart-container'>
                    <h5>discount codes</h5>
                    <div className='coupon-code-container'>
                        <input placeholder='Coupon code'/>
                        <button>apply</button>
                    </div>
                    <div className='cart-total-container'>
                        <h6>cart total</h6>
                        <TotalPrice/>
                        <button onClick={() => navigate('/checkout')}>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartPage
