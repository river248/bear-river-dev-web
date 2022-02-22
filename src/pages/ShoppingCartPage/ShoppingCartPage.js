/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import './ShoppingCartPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import { formatPrice } from 'utils/formatPrice'
import ShoppingCart from 'components/ShoppingCart/ShoppingCart'

function ShoppingCartPage({shoppingCart}) {

    const total = shoppingCart.reduce((result, item) => {
            return result + item.product.price*item.quantity
        }, 0)

    return (
        <>
            <TitlePage pageName={'Shopping cart'}/>
            <div className='shopping-cart-container'>
                <div className='left-shopping-cart-container'>
                    <ShoppingCart/>
                    <div className='bottom-left-shopping-cart-container'>
                        <Link to={'shop'}>continue shopping</Link>
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
                        <ul>
                            <li>Subtotal <span>$ {formatPrice(Math.round(total*100)/100)}</span></li>
                            <li>Total <span>$ {formatPrice(Math.round(total*100)/100)}</span></li>
                        </ul>
                        <button>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(ShoppingCartPage)
