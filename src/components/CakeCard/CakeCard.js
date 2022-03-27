/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { BsHeart } from 'react-icons/bs'

import './CakeCard.scss'
import ImageURL from 'components/ImageURL/ImageURL'
import { formatPrice } from 'utils/formatPrice'
import { addToCart } from 'actions/cartAction'
import { actMessage } from 'actions/globalState'

function CakeCard({ cakeItem, addToCart, showMessage, user }) {

    const navigate = useNavigate()

    const handleAddToCart = () => {
        addToCart(cakeItem, 1)
        showMessage(true, 'Added to cart successfully!', true)
    }

    return (
        <div className='product-card'>
            <div className='cake-image-container'>
                <ImageURL source={cakeItem.thumbnail} alert={cakeItem.name}/>
                <span className='cake-type'>{cakeItem.categoryName}</span>
                {user._id && <BsHeart/>}
            </div>
            <div className='product-info'>
                <span className='cake-name' onClick={() => navigate(`/shop/product?id=${cakeItem._id}&&category=${cakeItem.categoryID}`)}>{cakeItem.name}</span>
                <span className='cake-price'>${formatPrice(cakeItem.price)}</span>
                <span className='add-to-card' onClick={handleAddToCart}>Add to card</span>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart : (product, quantity) => {
            dispatch(addToCart(product, quantity))
        },
        showMessage : (type, content, isVisible) => {
            dispatch(actMessage(type, content, isVisible))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(CakeCard))
