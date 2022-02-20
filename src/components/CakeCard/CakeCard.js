/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'

import ImageURL from 'components/ImageURL/ImageURL'

import './CakeCard.scss'

function CakeCard({ cakeItem }) {

    return (
        <div className='product-card'>
            <div className='cake-image-container'>
                <ImageURL source={cakeItem.thumbnail} alert={cakeItem.name}/>
                <span className='cake-type'>{cakeItem.categoryName}</span>
            </div>
            <div className='product-info'>
                <span className='cake-name'>{cakeItem.name}</span>
                <span className='cake-price'>${cakeItem.price}</span>
                <span className='add-to-card'>Add to card</span>
            </div>
        </div>
    )
}

export default React.memo(CakeCard)
