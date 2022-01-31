import React from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { connect } from 'react-redux'

import './HeaderMobile.scss'
import logo from 'resouces/assests/header-logo.png'
import { toggleNav } from 'actions/globalState'

function HeaderMobile({ isVisible, toggleNav }) {

    return (
        <>
        <div className='header-mobile-container'>
            <div className='header-mobile-item'>
                <Link to={'/home'}>
                    <img src={logo} alt='logo'/>
                </Link>
                <button onClick={() => toggleNav(!isVisible)}><FaBars/></button>
            </div>
        </div>
        { isVisible && <div className='background-cover' onClick={() => toggleNav(false)} />}
        </>
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

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMobile)
