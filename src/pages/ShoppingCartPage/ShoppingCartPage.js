import React from 'react'
import { Link } from 'react-router-dom'

import './ShoppingCartPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import { newCakes } from 'actions/initialData'

function ShoppingCartPage() {
    return (
        <>
            <TitlePage pageName={'Shopping cart'}/>
            <div className='shopping-cart-container'>
                <div className='left-shopping-cart-container'>
                    <table>
                        <thead>
                            <tr>
                                <th>product</th>
                                <th>quantity</th>
                                <th>total</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            { newCakes.map((newCake, index) => (<tr key={index}>
                                <td>
                                    <div className='shopping-product-container'>
                                        <div className='shopping-product-image'>
                                            <img src={newCake.image} alt=''/>
                                        </div>
                                        <div className='shopping-product-info'>
                                            <span>{newCake.name}</span>
                                            <span>$ {newCake.price}</span>
                                        </div>
                                    </div>
                                </td>
                                <td className='quantity-product-container'>
                                    <span>-</span>
                                    <input value={1} readOnly/>
                                    <span>+</span>
                                </td>
                                <td><span className='total-price'>$ 30.00</span></td>
                                <td><span className='cancle-product-btn'/></td>
                            </tr>))}
                        </tbody>
                    </table>
                    <div className='bottom-left-shopping-cart-container'>
                        <Link to={'shop'}>continue shopping</Link>
                        <span>update cart</span>
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
                            <li>Subtotal <span>$ 169.50</span></li>
                            <li>Total <span>$ 169.50</span></li>
                        </ul>
                        <button>proceed to checkout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ShoppingCartPage
