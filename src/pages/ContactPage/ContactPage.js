import React from 'react'

import './ContactPage.scss'
import MapContainer from 'components/MapContainer/MapContainer'

function ContactPage() {
    return (
        <div className='contact-page-container'>
            <MapContainer/>
            <div className='address-container'>
                <div className='address-item'>
                    <h4>SAN BERNARDINO</h4>
                    <h5>795 W 5th St, San Bernardino, CA 92410, USA</h5>
                    <h5>+1 800-786-1000</h5>
                    <h5>Sweetcake@support.com</h5>
                </div>
                <div className='address-item'>
                    <h4>LOS ANGELES</h4>
                    <h5>639 S Spring St, Los Angeles, CA 90014, USA</h5>
                    <h5>+1 213-612-3000</h5>
                    <h5>Sweetcake@support.com</h5>
                </div>
                <div className='address-item'>
                    <h4>SAN BERNARDINO</h4>
                    <h5>1000 Lakepoint Dr, Frisco, CO 80443, USA</h5>
                    <h5>+1 800-786-1000</h5>
                    <h5>Sweetcake@support.com</h5>
                </div>
            </div>

            <div className='contact-info-container'>
                <div className='contact-info-left'>
                    <h3>Contact With us</h3>
                    <p>Representatives or Advisors are available:</p>
                    <p>Mon-Fri: 5:00am to 9:00pm</p>
                    <p>Sat-Sun: 6:00am to 9:00pm</p>
                </div>
                <div className='contact-info-right'>
                    <div className='contact-method'>
                        <input placeholder='Name'/>
                        <input type={'email'} placeholder='Email'/>
                    </div>
                    <input placeholder='Message'/>
                    <button>send us</button>
                </div>
            </div>
        </div>
    )
}

export default ContactPage
