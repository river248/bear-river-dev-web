import React from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { FcGoogle } from 'react-icons/fc'

import firebaseApp from 'config/firebaseConfig'
import './SocialSign.scss'

firebaseApp()

function GoogleSign() {

  const auth = getAuth()
  const provider = new GoogleAuthProvider()

  const handleGoogleSign = () => {
    signInWithPopup(auth, provider).then(res => console.log(res.user))
  }
  
  return (
    <button className='social-sign-in-btn' onClick={handleGoogleSign}>
      <FcGoogle/>
    </button>
  )
}

export default GoogleSign