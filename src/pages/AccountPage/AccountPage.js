import React from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import FacebookLogin from 'react-facebook-login'
import { FaFacebook } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import GoogleLogin from 'react-google-login'

import './AccountPage.scss'
import background from 'resouces/assests/cakes.jpg'
import { signInWithSocial } from 'actions/ApiCall/userAPI'
import { setUserSession } from 'components/Auth/Auth'
import LogInSignUpForm from 'components/LogInSignUpForm/LogInSignUpForm'
import { connect } from 'react-redux'
import { actLoading } from 'actions/globalState'

function AccountPage({actLoading}) {

    const location = useLocation()
    const navigate = useNavigate()

    const handleSuccessFacebookSign = (res) => {
        actLoading(true)
        const { accessToken, userID } = res
        signInWithSocial('facebook', {accessToken, userID}).then(res => {
          setUserSession(res.accessToken)
          actLoading(false)
        }).catch(error => {
          console.log(error)
          actLoading(false)
        })
    }

    const handleSuccessGoogleSignin = (res) => {
        actLoading(true)
        const tokenId = res.tokenId
        const data = {tokenId: tokenId}
    
        signInWithSocial('google', data).then(response => {
            setUserSession(response.accessToken)
            actLoading(false)
            navigate('/')
        }).catch(error => {
            console.log(error)
            actLoading(false)
        })
      }
    
      const handleFailureGoogleSignin = () => {
          alert('Some errors were occur when login')
      }

    return (
        <div className='account-page-wrapper'>
            <img src={background} alt=''/>
            <div className='account-page-container'>
                <h1>{location.pathname === '/account/sign-in' ? 'Sign In' : 'Sign Up'}</h1>
                <LogInSignUpForm/>
                <span>Or login with</span>
                <div className='account-page-social-sign'>
                    <FacebookLogin
                        appId='2098815733607662'
                        autoLoad={false}
                        fields='name,email,picture'
                        callback={handleSuccessFacebookSign}
                        cssClass='social-sign-in-btn'
                        icon={<FaFacebook/>}
                    />
                    <GoogleLogin
                        clientId='703216356376-sntcc2b0qbs9lhqs53ov4a3ntttj7u54.apps.googleusercontent.com'
                        render={renderProps => (
                            <button onClick={renderProps.onClick} disabled={renderProps.disabled} className='social-sign-in-btn'>
                                <FcGoogle/>
                            </button>
                        )}
                        buttonText='Login'
                        onSuccess={handleSuccessGoogleSignin}
                        onFailure={handleFailureGoogleSignin}
                        cookiePolicy={'single_host_origin'}
                    />
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
  
const mapDispatchToProps = (dispatch) => {
    return {
        actLoading : (status) => {
            dispatch(actLoading(status))
        }
    }
}

export default connect(null, mapDispatchToProps) (React.memo(AccountPage))