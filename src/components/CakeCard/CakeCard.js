/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'

import './CakeCard.scss'
import ImageURL from 'components/ImageURL/ImageURL'
import { formatPrice } from 'utils/formatPrice'
import { addToCart } from 'actions/cartAction'

function CakeCard({ cakeItem, addToCart }) {

    const navigate = useNavigate()

    return (
        <div className='product-card'>
            <div className='cake-image-container'>
                <ImageURL source={cakeItem.thumbnail} alert={cakeItem.name}/>
                <span className='cake-type'>{cakeItem.categoryName}</span>
            </div>
            <div className='product-info'>
                <span className='cake-name' onClick={() => navigate(`/shop/product?id=${cakeItem._id}&&category=${cakeItem.categoryID}`)}>{cakeItem.name}</span>
                <span className='cake-price'>${formatPrice(cakeItem.price)}</span>
                <span className='add-to-card' onClick={() => addToCart(cakeItem, 1)}>Add to card</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (product, quantity) => {
            dispatch(addToCart(product, quantity))
        }
    }
}

export default connect(null, mapDispatchToProps)(React.memo(CakeCard))
