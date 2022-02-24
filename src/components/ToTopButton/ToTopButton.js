import React, { useState, useEffect } from 'react'
import { IoIosArrowUp } from 'react-icons/io'

import './ToTopButton.scss'

function ToTopButton() {

  const [visible, setVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setVisible(true);
    } else {
      setVisible(false);
    }
};

  const scrollToTop = () => {
      window.scrollTo(0, 0);
  }

  useEffect(() => {
      window.addEventListener("scroll", toggleVisibility)

      return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <>
    { visible && <div className='to-top-btn' onClick={scrollToTop}>
      <IoIosArrowUp/>
    </div> }
    </>
  )
}

export default ToTopButton