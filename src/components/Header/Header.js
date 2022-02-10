import React, { useEffect, useRef, useState } from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { BsHeart } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'

import './Header.scss'
import logo from 'resouces/assests/header-logo.png'
import { toggleNav } from 'actions/globalState'

function Header({ isVisible, toggleNav }) {

    const location = useLocation()
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(false)
    const menuRef = useRef(null)
    const headerRef = useRef()

    const toggleMenu = () => {
        if (isShow) {
            setIsShow(false)
            menuRef.current.style.setProperty('height', '65px')
        }
        else {
            setIsShow(true)
            menuRef.current.style.setProperty('height', '276px')
        }
    }

    useEffect(() => {
        if (isVisible)
            headerRef.current.style.setProperty('left', '0px')
        else
            headerRef.current.style.setProperty('left', '-300px')
    }, [isVisible])

    return (
        <div className='header-container' ref = {headerRef}>
            <div className='left-header header-item'>
                <Link to={'/account/sign-up'}>Sign up</Link>
                <hr/>
                <Link to={'/account/sign-in'}>Sign in</Link>
            </div>
            <Link to={'/home'}>
                <img src={logo} alt='logo' className='header-item'/>
            </Link>
            <div className='nav-mobile-container header-item' ref={menuRef}>
                <div className='nav-mobile-item' onClick={toggleMenu}>
                    <span>menu</span>
                    <FaBars/>
                </div>
                <ul>
                    <li className={(location.pathname === '/home' || location.pathname === '/') ? 'active-nav-mobile' : ''}>
                        <Link to={'home'}>Home</Link>
                    </li>
                    <li
                        className={(location.pathname === '/shop' ||
                        location.pathname === '/shopping-cart' ||
                        location.pathname === '/shop/product') ? 'active-nav-mobile' : ''}>
                        <Link to={'shop'}>Shop</Link>
                    </li>
                    <li className={location.pathname === '/blog' ? 'active-nav-mobile' : ''}>
                        <Link to={'blog'}>Blog</Link>
                    </li>
                    <li className={location.pathname === '/contact' ? 'active-nav-mobile' : ''}>
                        <Link to={'contact'}>Contact</Link>
                    </li>
                    <li className={location.pathname === '/about' ? 'active-nav-mobile' : ''}>
                        <Link to={'about'}>About</Link>
                    </li>
                </ul>
            </div>
            <div className='right-header header-item'>
                <div className='right-header-links'>
                    <FiSearch/>
                    <hr/>
                    <BsHeart/>
                </div>
                <div className='right-header-cart'>
                    <FiShoppingBag onClick={() => navigate('shopping-cart')}/>
                    <span>Cart: $0.00</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.globalState.isVisible
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleNav : (state) => {
            dispatch(toggleNav(state))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
