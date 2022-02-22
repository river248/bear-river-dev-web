/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CakeCard.scss'
import ImageURL from 'components/ImageURL/ImageURL'
import { formatPrice } from 'utils/formatPrice'

function CakeCard({ cakeItem }) {

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
                <span className='add-to-card'>Add to card</span>
            </div>
        </div>
    )
}

export default React.memo(CakeCard)
