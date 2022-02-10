import React from 'react'
import { useNavigate } from 'react-router-dom'

import './CakeCard.scss'

function CakeCard({ cakeItem }) {

    const navigate = useNavigate()

    return (
        <div className='product-card'>
            <div className='cake-image-container'>
                <img src={cakeItem.image} alt='' onClick={() => navigate('/shop/product?id=1')}/>
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
