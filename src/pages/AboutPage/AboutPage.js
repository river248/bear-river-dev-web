import React from 'react'
import { Link } from 'react-router-dom'

import './AboutPage.scss'
import IntroduceVideo from 'components/IntroduceVideo/IntroduceVideo'
import AboutCakeShop from 'components/AboutCakeShop/AboutCakeShop'
import Testimonial from 'components/Testimonial/Testimonial'
import OurTeam from 'components/OurTeam/OurTeam'

function AboutPage() {
    return (
        <>
        <div className='about-page-title'>
            <h1>About</h1>
            <div className='about-page-right-title'>
                <Link to={'/home'}>Home</Link>
                <hr/>
                <span>About</span>
            </div>
        </div>
        <IntroduceVideo/>
        <AboutCakeShop/>
        <Testimonial/>
        <OurTeam/>
        </>
    )
}

export default AboutPage
