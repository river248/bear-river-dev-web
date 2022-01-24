import React from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'

import './Header.scss'
import logo from 'resouces/assests/header-logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header-container'>
            <div className='left-header'>
                <Link to={'/account/sign-up'}>Sign up</Link>
                <hr/>
                <Link to={'/account/sign-in'}>Sign in</Link>
            </div>
            <Link to={'/home'}>
                <img src={logo} alt='logo'/>
            </Link>
            <div className='right-header'>
                <div className='right-header-links'>
                    <FiSearch/>
                    <hr/>
                    <BsHeart/>
                </div>
                <div className='right-header-cart'>
                    <FiShoppingBag/>
                    <span>Cart: $0.00</span>
                </div>
            </div>
        </div>
    )
}

export default Header
