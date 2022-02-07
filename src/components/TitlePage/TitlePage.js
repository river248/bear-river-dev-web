import React from 'react'
import { Link } from 'react-router-dom'

import './TitlePage.scss'

function TitlePage({ pageName }) {
    
    return (
        <div className='title-page-container'>
            <h1>{pageName}</h1>
            <div className='right-title-page'>
                <Link to={'/home'}>Home</Link>
                <hr/>
                <span>{pageName}</span>
            </div>
        </div>
    )
}

export default React.memo(TitlePage)
