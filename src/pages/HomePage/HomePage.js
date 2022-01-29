import React from 'react'
import { FiInstagram } from 'react-icons/fi'
import Slider from 'react-slick'
import {IoIosArrowBack, IoIosArrowForward} from 'react-icons/io'

import './HomePage.scss'
import IntroduceVideo from 'components/IntroduceVideo/IntroduceVideo'
import OurTeam from 'components/OurTeam/OurTeam'
import AboutCakeShop from 'components/AboutCakeShop/AboutCakeShop'
import CakeCard from 'components/CakeCard/CakeCard'
import Testimonial from 'components/Testimonial/Testimonial'
import moment from 'resouces/assests/moment-1.jpg'
import cupcake from 'resouces/assests/cupcake.png'
import pancake from 'resouces/assests/pancake.png'
import redvelvet from 'resouces/assests/red-velvet.png'
import cupcake3 from 'resouces/assests/cupcake3.png'
import donut from 'resouces/assests/donut.png'
import cupcake2 from 'resouces/assests/cupcake2.png'
import MapContainer from 'components/MapContainer/MapContainer'

function HomePage() {

  const cakes = [
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'},
    {name: 'DOZEN CUPCAKES', price: '$32.00', type: 'Cupcake', image: 'https://preview.colorlib.com/theme/cake/img/shop/product-1.jpg.webp'}
  ]

  const images = [1, 2, 3, 4, 5, 6]

  const listCakeType = [
    {name: 'cupcake', image: cupcake},
    {name: 'butter', image: pancake},
    {name: 'red velvet', image: redvelvet},
    {name: 'biscuit', image: cupcake3},
    {name: 'donut', image: donut},
    {name: 'cupcake', image: cupcake2}
  ]

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
          {listCakeType.map((cakeType, index) => (
            <div className='cake-type-item' key={index}>
              <div className='cake-type-item-container'>
                <img src={cakeType.image} alt=''/>
                <h5>{cakeType.name}</h5>
              </div>
            </div>
          ))}
        </Slider>
      </div>


      <section className='home-product-container'>
        {cakes.map((cake, index) => (
          <CakeCard cakeItem={cake} key={index}/>
        ))}
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

export default HomePage
