import React from 'react'

import IntroduceVideo from 'components/IntroduceVideo/IntroduceVideo'
import AboutCakeShop from 'components/AboutCakeShop/AboutCakeShop'
import Testimonial from 'components/Testimonial/Testimonial'
import OurTeam from 'components/OurTeam/OurTeam'
import TitlePage from 'components/TitlePage/TitlePage'

function AboutPage() {
    return (
        <>
        <TitlePage pageName={'About'}/>
        <IntroduceVideo/>
        <AboutCakeShop/>
        <Testimonial/>
        <OurTeam/>
        </>
    )
}

export default AboutPage
