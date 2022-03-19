import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

import { signIn, signUp } from 'actions/ApiCall/userAPI'
import { setUserSession } from 'components/Auth/Auth'
import LoadingCircle from 'components/Loading/LoadingCircle'
import { validateEmail } from 'utils/validate'

import './LogInSignUpForm.scss'
import { actLoading } from 'actions/globalState'

function LogInSignUpForm({loading, actLoading}) {

    const location = useLocation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [name, setName] = useState('')

    const [error, setError] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [errorConfirmPassword, setErrorConfirmPassword] = useState('')
    const [errorName, setErrorName] = useState('')

    const handleSubmitForm = (e) => {
        e.preventDefault()
    }

    const handleSignIn = () => {
        actLoading(true)
        if (email && password) {
            let data = {email: email, password: password}
            signIn(data).then(res => {
                setUserSession(res.accessToken)
                navigate('/')
                setEmail('')
                setPassword('')
                actLoading(false)
            }).catch(err => {
                setError(err.response.data.message)
                actLoading(false)
            })
        }
        if (!email) {
            setErrorEmail('Please fill in this field!')
            actLoading(false)
        }
        if (!password) {
            setErrorPassword('Please fill in this field!')
            actLoading(false)
        }
    }

    const handleSignUp = () => {
        actLoading(true)
        if (email && password && confirmPassword && name) {
            let data = {
                email: email,
                password: password,
                confirmPassword: confirmPassword,
                name: name
            }
            signUp(data).then(() => {
                actLoading(false)
                alert('Register successfully! Please activate your email to start.')
                navigate('/account/sign-in')
                setEmail('')
                setPassword('')
                setConfirmPassword('')
                setName('')
            }).catch(err => {
                setError(err.response.data.message)
                actLoading(false)
            })
        }
        if (!email) {
            actLoading(false)
            setErrorEmail('Please fill in this field!')
        }
        if (!password) {
            actLoading(false)
            setErrorPassword('Please fill in this field!')
        }
        if (!name) {
            actLoading(false)
            setErrorName('Please fill in this field!')
        }
        if (!confirmPassword) {
            actLoading(false)
            setErrorConfirmPassword('Please fill in this field!')
        }
    }

    const handleBlur = (type) => {
        switch (type) {
            case 1:
                if (!email)
                    setErrorEmail('Please fill in this field!')
                else
                    if (!validateEmail(email))
                        setErrorEmail('Invalid email!')
                    else
                        if (location.pathname === '/account/sign-up')
                            if (email.length < 15 || email.length > 50)
                                setErrorEmail('Email length must be no less than 15 characters and no more than 50 characters!')
                            else setErrorEmail('')
                        else setErrorEmail('')
                break
            case 2:
                if (!password)
                    setErrorPassword('Please fill in this field!')
                else
                    if (location.pathname === '/account/sign-up')
                        if (password.length < 8)
                            setErrorPassword('Password must be at least 8 characters!')
                        else
                            if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/))
                                setErrorPassword('Password must have number, uppercase letter, lowercase letter and special character!')
                            else setErrorPassword('')
                    else setErrorPassword('')
                break
            case 3:
                if (!confirmPassword)
                    setErrorConfirmPassword('Please fill in this field!')
                else
                    if (password !== confirmPassword)
                        setErrorConfirmPassword("Confirm passord doesn't match!")
                    else
                        setErrorConfirmPassword('')
                break
            case 4:
                if (!name)
                    setErrorName('Please fill in this field!')
                else
                    if (name.length < 5)
                        setErrorName('Password must be at least 5 characters!')
                    else
                        setErrorName('')
                break
            default:
                break
        }
    }
    
    return (
        <form className='login-signup-form' onSubmit={handleSubmitForm}>
            <div className='form-group'>
                <input
                    type={'email'}
                    value={email}
                    placeholder={'Email'}
                    onChange={e => setEmail(e.target.value)}
                    onBlur={() => handleBlur(1)}
                    onFocus={() => setErrorEmail('')}
                />
                <span className='form-message'>{errorEmail}</span>
            </div>
            <div className='form-group'>
                <input
                    type={'password'}
                    value={password}
                    placeholder={'Password'}
                    onChange={e => setPassword(e.target.value)}
                    onBlur={() => handleBlur(2)}
                    onFocus={() => setErrorPassword('')}
                />
                <span className='form-message'>{errorPassword}</span>
            </div>
            {location.pathname === '/account/sign-in' ? <>
                { !loading ? <button onClick={handleSignIn}>Sign In</button> : <LoadingCircle/>}
                </>
                 :
                <>
                <div className='form-group'>
                    <input
                        type={'password'}
                        value={confirmPassword}
                        placeholder={'Confirm password'}
                        onChange={e => setConfirmPassword(e.target.value)}
                        onBlur={() => handleBlur(3)}
                        onFocus={() => setErrorConfirmPassword('')}
                    />
                    <span className='form-message'>{errorConfirmPassword}</span>
                </div>
                <div className='form-group'>
                    <input
                        placeholder={'Your name'}
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onBlur={() => handleBlur(4)}
                        onFocus={() => setErrorName('')}
                    />
                    <span className='form-message'>{errorName}</span>
                </div>
                { !loading ? <button onClick={handleSignUp}>Sign Up</button> : <LoadingCircle/> }
                </>
            }
            <span className='form-message'>{error}</span>
        </form>
    )
}

const mapStateToProps = (state) => {
    return {
      loading: state.globalState.loading
    }
  }
  
const mapDispatchToProps = (dispatch) => {
    return {
        actLoading : (status) => {
            dispatch(actLoading(status))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(LogInSignUpForm))