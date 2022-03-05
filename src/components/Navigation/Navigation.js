import React, { useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'

import './Navigation.scss'

function Navigation() {

    const location = useLocation()
    const navRef = useRef(null)

    const stickyNav = () => {
        const position = 100 - window.pageYOffset
        
        if( position <= 0)
            navRef.current.style.setProperty('top', '0px')
        else
            navRef.current.style.setProperty('top', `${position}px`)
    }

    useEffect(() => {
      
        window.addEventListener('scroll', stickyNav)
    
        return () => window.removeEventListener('scroll', stickyNav)

    }, [])
    
    return (
        <div className='navigation-container' ref={navRef}>
            <ul>
                <li className={(location.pathname === '/home' || location.pathname === '/') ? 'active' : ''}>
                    <Link to={'home'}>Home</Link>
                </li>
                <li
                    className={(location.pathname === '/shop' ||
                    location.pathname === '/shopping-cart' ||
                    location.pathname === '/checkout' ||
                    location.pathname === '/shop/product') ? 'active' : ''}>
                    <Link to={'shop'}>Shop</Link>
                </li>
                <li className={location.pathname === '/blog' ? 'active' : ''}>
                    <Link to={'blog'}>Blog</Link>
                </li>
                <li className={location.pathname === '/contact' ? 'active' : ''}>
                    <Link to={'contact'}>Contact</Link>
                </li>
                <li className={location.pathname === '/about' ? 'active' : ''}>
                    <Link to={'about'}>About</Link>
                </li>
                <div className='current-link'/>
            </ul>
        </div>
    )
}

export default Navigation
