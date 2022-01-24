import React from 'react'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { AiOutlineTwitter, AiFillYoutube } from 'react-icons/ai'
import { GrSend } from 'react-icons/gr'

import './Footer.scss'
import FooterLogo from 'resouces/assests/xfooter-logo.png'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='top-footer'>
                <div className='top-left-footer'>
                    <h6>WORKING HOURSE</h6>
                    <span>Monday - Friday: 08:00 am - 08:30 pm</span>
                    <span>Saturday: 10:00 am - 16:30 pm</span>
                    <span>Sunday: 10:00 am - 16:30 pm</span>
                </div>
                <hr/>
                <div className='top-center-footer'>
                    <img src={FooterLogo} alt='logo'/>
                    <span>Lorem ipsum dolor amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</span>
                    <div className='social-icon-container'>
                        <div><FaFacebookF/></div>
                        <div><AiOutlineTwitter/></div>
                        <div><FiInstagram/></div>
                        <div><AiFillYoutube/></div>
                    </div>
                </div>
                <hr/>
                <div className='top-right-footer'>
                    <h6>SUBSCRIBE</h6>
                    <span>Get latest updates and offers.</span>
                    <div className='email-inp'>
                        <input type={'email'} placeholder='Email'/>
                        <GrSend/>
                    </div>
                </div>
            </div>
            <div className='bottom-footer'>
                <span>Copyright ©2022 All rights reserved | This template is made with love by Colorlib</span>
                <ul>
                    <li>Privacy</li>
                    <hr/>
                    <li>Terms & Conditions</li>
                    <hr/>
                    <li>Site Map</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
