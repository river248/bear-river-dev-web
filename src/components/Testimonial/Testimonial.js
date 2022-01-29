import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FaStarHalfAlt, FaStar } from 'react-icons/fa'

import './Testimonial.scss'
import clientImage from 'resouces/assests/client.jpg'

function Testimonial() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: false
                }
              }
        ]
    }

    const clients = [
        {name: 'RIVER SPRING', address: 'Viet Nam', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.'},
        {name: 'RIVER SPRING', address: 'Viet Nam', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.'},
        {name: 'RIVER SPRING', address: 'Viet Nam', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.'},
        {name: 'RIVER SPRING', address: 'Viet Nam', comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua viverra lacus vel facilisis.'}
    ]

    return (
        <section className='testimonial-container'>
            <h3>TESTIMONIAL</h3>
            <h1>Our client say</h1>
            <Slider {...settings}>
                { clients.map((client, index) => (
                <div className='testimonial-item' key={index}>
                    <div className='testimonial-item-container'>
                        <div className='header-client'>
                            <div className='header-client-info'>
                                <div className='client-image'>
                                    <img src={clientImage} alt=''/>
                                </div>
                                <div className='header-client-name'>
                                    <span>{client.name}</span>
                                    <span>{client.address}</span>
                                </div>
                            </div>
                            <div className='header-client-rating'>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStar/>
                                <FaStarHalfAlt/>
                            </div>
                        </div>
                        <div className='footer-client'>
                            {client.comment}
                        </div>
                    </div>
                </div>))}
            </Slider>
        </section>
    )
}

export default Testimonial
