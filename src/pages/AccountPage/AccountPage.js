import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './AccountPage.scss'
import background from 'resouces/assests/cakes.jpg'
import GoogleSign from 'components/Auth/GoogleSign'
import FacebookSign from 'components/Auth/FacebookSign'

function AccountPage() {

    const location = useLocation()

  return (
    <div className='account-page-wrapper'>
        <img src={background} alt=''/>
        <div className='account-page-container'>
            <h1>{location.pathname === '/account/sign-in' ? 'Sign In' : 'Sign Up'}</h1>
            <form>
                <input type={'email'} placeholder={'Email'}/>
                <input type={'password'} placeholder={'Password'}/>
                {location.pathname === '/account/sign-in' ? 
                    <button>Sign In</button> :
                    <>
                    <input type={'password'} placeholder={'Confirm password'}/>
                    <input placeholder={'Your name'}/>
                    <button>Sign Up</button>
                    </>
                }
            </form>
            <span>Or login with</span>
            <div className='account-page-social-sign'>
                <FacebookSign/>
                <GoogleSign/>
            </div>
            <Link to={'/home'} className='account-page-home-link'>Go to home</Link>
            {location.pathname === '/account/sign-in' ?
                <Link to={'/account/sign-up'}>Sign up</Link> :
                <Link to={'/account/sign-in'}>Sign in</Link>
            }
        </div>
    </div>
  )
}

export default AccountPage