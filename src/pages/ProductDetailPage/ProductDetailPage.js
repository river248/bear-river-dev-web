/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { connect } from 'react-redux'

import './ProductDetailPage.scss'
import TitlePage from 'components/TitlePage/TitlePage'
import CakeCard from 'components/CakeCard/CakeCard'
import useQuery from 'utils/useQuery'
import { actFetchCategoryCakes, actFetchDetailedCake } from 'actions/cakeAction'
import ImageURL from 'components/ImageURL/ImageURL'
import { formatPrice } from 'utils/formatPrice'

function ProductDetailPage(props) {

    const {
        cake, relatedCakes,
        getDetailedCake, getCategoryCakes
    } = props
    let query = useQuery()

    useEffect(() => {
        getDetailedCake(query.get('id'))
        getCategoryCakes(query.get('category'), null, null, 1)
    }, [query.get('id')])

    return (
        <>
        <TitlePage
            pageName={'Product detail'}
            cakeName={cake.name}
        />
        <div className='product-detail-container'>
            <div className='product-detail-image'>
                <ImageURL source={cake.thumbnail} alert={cake.name}/>
            </div>
            <div className='product-detail-info'>
                <span>{cake.categoryName}</span>
                <h2>{cake.name}</h2>
                <h3>${formatPrice(cake.price)}</h3>
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
                {relatedCakes.map(relatedCake => (
                    <CakeCard cakeItem={relatedCake} key={relatedCake._id}/>
                ))}
            </div>
        </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cake: state.cakeReducer.cake,
        relatedCakes: state.cakeReducer.relatedCakes
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
        getDetailedCake : (id) => {
            dispatch(actFetchDetailedCake(id))
        },
        getCategoryCakes : (categoryID, sortBy, value, page) => {
            dispatch(actFetchCategoryCakes(categoryID, sortBy, value, page))
        }
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailPage)