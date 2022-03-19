/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import { FiInstagram } from 'react-icons/fi'
import Slider from 'react-slick'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'
import { connect } from 'react-redux'

import './HomePage.scss'
import IntroduceVideo from 'components/IntroduceVideo/IntroduceVideo'
import OurTeam from 'components/OurTeam/OurTeam'
import AboutCakeShop from 'components/AboutCakeShop/AboutCakeShop'
import CakeCard from 'components/CakeCard/CakeCard'
import Testimonial from 'components/Testimonial/Testimonial'
import moment from 'resouces/assests/moment-1.jpg'
import MapContainer from 'components/MapContainer/MapContainer'
import { actFetchAllCategories } from 'actions/categoryAction'
import ImageURL from 'components/ImageURL/ImageURL'
import { actFetchCakes } from 'actions/cakeAction'
import { fake8Products } from 'utils/fakeProduct'
import LoadingCard from 'components/Loading/LoadingCard'

function HomePage(props) {

  const {
    categories, newCakes, loading,
    getAllCategories, getNewCakes } = props

  const images = [1, 2, 3, 4, 5, 6]

  useEffect(() => {
    getAllCategories()
    getNewCakes(null, null, 1)
  }, [])

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow/>,
    prevArrow: <SamplePrevArrow/>,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
          breakpoint: 992,
          settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '10px',
              arrows: false,
          }
        },
        {
          breakpoint: 540,
          settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: '0px',
              arrows: false,
          }
        }
    ]
  }

  return (
    <div className='home-page-container'>
      <section className='home-page-title-container'>
        <div className='home-page-title-box'>
          <h1>Making your life sweeter one bite at a time!</h1>
          <button>OUR CAKES</button>
        </div>
      </section>

      <AboutCakeShop/>
      
      
      <div className='cake-type-slider'>
        <Slider {...settings}>
          {categories.map(category => (
            <div className='cake-type-item' key={category._id}>
              <div className='cake-type-item-container'>
                <ImageURL source={category.image} alert={category.categoryName}/>
                <h5>{category.categoryName}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <section className='home-product-container slider-container-moblie'>
      { loading ? (fake8Products.map(item => <LoadingCard key={item}/>)) :
        (newCakes.map(newCake => <CakeCard key={newCake._id} cakeItem={newCake}/>))}
      </section>

      <IntroduceVideo/>
      <OurTeam/>
      <Testimonial/>

      <section className='sweet-moments-container'>
        <div className='sweet-moments-left'>
          <h3>FOLLOW US ON INSTAGRAM</h3>
          <h1>Sweet moments are saved as memories.</h1>
          <h5><FiInstagram/>@sweetcake</h5>
        </div>
        <div className='sweet-moments-right'>
          {images.map(index => (
          <div className='sweet-moments-right-item' key={index}>
            <div className='sweer-moments-right-image'>
              <img src={moment} alt=''/>
            </div>
          </div>))}
        </div>
      </section>
      <MapContainer/>
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}><IoIosArrowForward/></div>
  )
}

function SamplePrevArrow(props) {
  const { className, onClick } = props
  return (
    <div className={className} onClick={onClick}><IoIosArrowBack/></div>
  )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categoryReducer,
    newCakes: state.cakeReducer.newCakes,
    loading: state.globalState.loading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAllCategories : () => {
      dispatch(actFetchAllCategories())
    },
    getNewCakes : (sortBy, value, page) => {
      dispatch(actFetchCakes(sortBy, value, page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)
