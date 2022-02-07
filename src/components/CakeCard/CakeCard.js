import React from 'react'

import './CakeCard.scss'

function CakeCard({ cakeItem }) {

    return (
        <div className='product-card'>
            <div className='cake-image-container'>
                <img src={cakeItem.image} alt=''/>
                <span className='cake-type'>{cakeItem.type}</span>
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
