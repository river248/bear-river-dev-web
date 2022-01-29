/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

import './MapContainer.scss'

function MapContainer() {
  return <div className='map-container'>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.2311711962034!2d106.80086541462147!3d10.87001416043201!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2sUniversity%20of%20Information%20Technology%20-%20VNUHCM!5e0!3m2!1sen!2s!4v1643486726041!5m2!1sen!2s" allowFullScreen="" loading="lazy"></iframe>
  </div>
}

export default MapContainer
