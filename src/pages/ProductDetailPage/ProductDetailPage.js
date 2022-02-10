import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'

import './ProductDetailPage.scss'
import { cakes } from 'actions/initialData'
import TitlePage from 'components/TitlePage/TitlePage'
import CakeCard from 'components/CakeCard/CakeCard'

function ProductDetailPage() {

  return (
    <>
    <TitlePage
        pageName={'Product detail'}
        cakeName={cakes[10].name}
    />
    <div className='product-detail-container'>
        <div className='product-detail-image'>
            <img src={cakes[10].image} alt=''/>
        </div>
        <div className='product-detail-info'>
            <span>{cakes[10].type}</span>
            <h2>{cakes[10].name}</h2>
            <h3>${cakes[10].price}</h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida</p>
            <div className='product-detail-option'>
                <div className='product-detail-option-quantity'>
                    <span>-</span>
                    <input value={2} readOnly/>
                    <span>+</span>
                </div>
                <button>add to cart</button>
                <button className='product-detail-option-love-btn'><AiOutlineHeart/></button>
            </div>
        </div>
    </div>
    <div className='related-product-wrapper'>
        <h1>Related Products</h1>
        <div className='related-product-container'>
            {cakes.map((cake, index) => (
                    <CakeCard cakeItem={cake} key={index}/>
            ))}
        </div>
    </div>
    </>
  )
}

export default ProductDetailPage