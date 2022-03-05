import React from 'react'
import { connect } from 'react-redux'

import { formatPrice } from 'utils/formatPrice'
import './TotalPrice.scss'

export const TotalPrice = ({shoppingCart}) => {

    
    const total = shoppingCart.reduce((result, item) => {
        return result + item.product.price*item.quantity
    }, 0)

  return (
    <ul className='total-price-ul'>
        <li>Subtotal <span>$ {formatPrice(Math.round(total*100)/100)}</span></li>
        <li>Total <span>$ {formatPrice(Math.round(total*100)/100)}</span></li>
    </ul>
  )
}

const mapStateToProps = (state) => {
    return {
        shoppingCart: state.cartReducer
    }
}

export default connect(mapStateToProps, null)(React.memo(TotalPrice))