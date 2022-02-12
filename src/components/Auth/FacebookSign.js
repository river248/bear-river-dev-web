import React from 'react'
import { getAuth, signInWithPopup, FacebookAuthProvider } from 'firebase/auth'
import { FaFacebook } from 'react-icons/fa'

import firebaseApp from 'config/firebaseConfig'
import './SocialSign.scss'

firebaseApp()

function FacebookSign() {

  const auth = getAuth()
  const provider = new FacebookAuthProvider()

  const handleFacebookSign = () => {
    signInWithPopup(auth, provider).then(res => console.log(res.user))
  }
  
  return (
    <button className='social-sign-in-btn' onClick={handleFacebookSign}>
      <FaFacebook/>
    </button>
  )
}

export default FacebookSign