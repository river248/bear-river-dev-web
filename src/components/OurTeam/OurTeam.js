import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'

import './OurTeam.scss'

function OurTeam() {

    const employees = [
        {name: 'RIVER SPRING', position: 'Decorater', image: 'https://preview.colorlib.com/theme/cake/img/team/team-1.jpg.webp'},
        {name: 'RIVER SPRING', position: 'Decorater', image: 'https://preview.colorlib.com/theme/cake/img/team/team-1.jpg.webp'},
        {name: 'RIVER SPRING', position: 'Decorater', image: 'https://preview.colorlib.com/theme/cake/img/team/team-1.jpg.webp'},
        {name: 'RIVER SPRING', position: 'Decorater', image: 'https://preview.colorlib.com/theme/cake/img/team/team-1.jpg.webp'}
    ]

    return (
        <section className='our-team'>
            <div className='our-team-container'>
                <div className='title-our-team'>
                    <h3>OUR TEAM</h3>
                    <h1>Sweet Barker</h1>
                </div>
                <div className='our-team-image-container slider-container-moblie'>
                    { employees.map((employee, index) => (
                    <div className='our-team-item' key={index}>
                        <div className='our-team-info-container'>
                            <img src={employee.image} alt='' className='employee-image'/>
                            <div className='our-team-info'>
                                <span>{employee.name}</span>
                                <span>{employee.position}</span>
                                <div className='social-contact-info'>
                                    <div><FaFacebookF/></div>
                                    <div><AiOutlineTwitter/></div>
                                    <div><FiInstagram/></div>
                                    <div><AiFillYoutube/></div>
                                </div>
                            </div>
                        </div>
                    </div>))}
                </div>
            </div>
        </section>
    )
}

export default OurTeam
