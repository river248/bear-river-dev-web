import React from 'react'
import { BiPlay } from 'react-icons/bi'

import './IntroduceVideo.scss'
import VideoImage from 'resouces/assests/class-video.jpg'

function IntroduceVideo() {
    return (
        <section className='introduce-video-container'>
            <div className='image-video-container'>
                <img src={VideoImage} alt=''/>
                <button><BiPlay/></button>
            </div>
        </section>
    )
}

export default IntroduceVideo
