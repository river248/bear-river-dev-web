/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { FiSearch, FiShoppingBag } from 'react-icons/fi'
import { FaSignOutAlt } from 'react-icons/fa'
import { BsHeart } from 'react-icons/bs'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'

import './Header.scss'
import logo from 'resouces/assests/header-logo.png'
import client from 'resouces/assests/client.jpg'
import { formatPrice } from 'utils/formatPrice'
import { actGetUserInfo, actLogOut } from 'actions/userAction'
import { getToken, removeUserSession } from 'components/Auth/Auth'

function Header(props) {

    const {
        isVisible, shoppingCart, user,
        getUserInfor, logout
    } = props

    const location = useLocation()
    const navigate = useNavigate()
    const [isShow, setIsShow] = useState(false)
    const menuRef = useRef(null)
    const headerRef = useRef()
    const token = getToken()

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

    const total = shoppingCart.reduce((result, item) => result + item.product.price*item.quantity, 0)

    useEffect(() => {
        if (isVisible)
            headerRef.current.style.setProperty('left', '0px')
        else
            headerRef.current.style.setProperty('left', '-300px')
    }, [isVisible])

    useLayoutEffect(() => {
        if (token)
            getUserInfor(token)
    }, [token])

    const handleLogout = () => {
        logout()
        removeUserSession()
    }

    return (
        <div className='header-container' ref = {headerRef}>
            {!user._id ? <div className='left-header header-item'>
                <Link to={'/account/sign-up'}>Sign up</Link>
                <hr/>
                <Link to={'/account/sign-in'}>Sign in</Link>
            </div> : <div className='header-user header-item'>
                <FaSignOutAlt onClick={handleLogout}/>
                <hr/>
                <div className='header-user-avatar' onClick={() => navigate(`user/info`)}>
                    <img src={client} alt="user's avatar"/>
                </div>
                <span className='header-user-name'>Riverrrrrrrrrrrrrrrrrrrrrrr</span>
            </div>}
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
                    {user._id && <><hr/><BsHeart/></>}
                </div>
                <div className='right-header-cart'>
                    <FiShoppingBag onClick={() => navigate('shopping-cart')}/>
                    { (shoppingCart.length) > 0 && <span className='quantity-product-in-cart'>{shoppingCart.length}</span>}
                    <span>Cart: ${formatPrice(formatPrice(Math.round(total*100)/100))}</span>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        isVisible: state.globalState.isVisible,
        shoppingCart: state.cartReducer,
        user: state.userReducer.user
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getUserInfor : (token) => {
            dispatch(actGetUserInfo(token))
        },
        logout : () => {
            dispatch(actLogOut())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)
