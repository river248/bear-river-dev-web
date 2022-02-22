import React from 'react'
import { connect } from 'react-redux'

import './ShoppingCart.scss'
import ImageURL from 'components/ImageURL/ImageURL'
import { formatPrice } from 'utils/formatPrice'
import { addToCart, removeProduct, updateCart } from 'actions/cartAction'

function ShoppingCart(props) {

    const {
        shoppingCart,
        addToCart,updateCart, removeProduct
    } = props

    const handleReduceQuantity = (item) => {
        if (item.quantity > 1)
            updateCart(item.product, -1)
    }

    const handleRemoveProduct = (product) => {
        removeProduct(product)
    }

  return (
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
            { shoppingCart.map(item => (<tr key={item.product._id}>
                <td>
                    <div className='shopping-product-container'>
                        <div className='shopping-product-image'>
                            <ImageURL source={item.product.thumbnail} alert={item.product.name}/>
                        </div>
                        <div className='shopping-product-info'>
                            <span>{item.product.name}</span>
                            <span>$ {formatPrice(item.product.price)}</span>
                        </div>
                    </div>
                </td>
                <td className='quantity-product-container'>
                    <span onClick={() => handleReduceQuantity(item)}>-</span>
                    <input value={item.quantity} readOnly/>
                    <span onClick={() => addToCart(item.product, 1)}>+</span>
                </td>
                <td><span className='total-price'>$ {formatPrice(Math.round(item.product.price*item.quantity*100)/100)}</span></td>
                <td><span className='cancle-product-btn' onClick={() => handleRemoveProduct(item.product)}/></td>
            </tr>))}
        </tbody>
    </table>
  )
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.cartReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (product, quantity) => {
            dispatch(addToCart(product, quantity))
        },
        updateCart : (product, quantity) => {
            dispatch(updateCart(product, quantity))
        },
        removeProduct : (product) => {
            dispatch(removeProduct(product))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(ShoppingCart))