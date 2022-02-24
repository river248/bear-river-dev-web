/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from 'react'
import { BiCheckCircle, BiErrorCircle } from 'react-icons/bi'
import { connect } from 'react-redux'

import './Message.scss'
import { actMessage } from 'actions/globalState'

function Message({ message, actMessage }) {

  const messageRef = useRef(null)

  useEffect(() => {
    let timmer, timmer2

    if (message.isVisible) {
      timmer2 = setTimeout(() => {
        messageRef.current.style.setProperty('animation', 'slideLeftToRight 0.2s ease-out forwards')
      }, 2000)
      timmer = setTimeout(() => {
        actMessage(false, '', false)
      }, 2200)
    }

    return () => {
      clearTimeout(timmer)
      clearTimeout(timmer2)
    }
  }, [message.isVisible])

  return (
    <>
    {message.isVisible && <div ref={messageRef} className={ message.type ? 'message-container success-message' : 'message-container'}>
      { message.type ? <BiCheckCircle/> :
      <BiErrorCircle className='error-icon'/> }
      { message.content }
    </div>}
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    message : state.globalState.message
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actMessage : (type, content, isVisible) => {
      dispatch(actMessage(type, content, isVisible))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Message))