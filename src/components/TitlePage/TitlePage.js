import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import './TitlePage.scss'

function TitlePage({ pageName, cakeName }) {
    
    const location = useLocation()

    return (
        <div className='title-page-container'>
            <h1>{pageName}</h1>
            <div className='right-title-page'>
                <Link to={'/home'}>Home</Link>
                <hr/>
                { location.pathname !== '/shop/product' ?
                    <span>{pageName}</span> :
                    <>
                    <Link to={'/shop'}>Shop</Link>
                    <hr/>
                    <span>{ !cakeName ? 'Undefined' : cakeName}</span>
                    </>
                }
            </div>
        </div>
    )
}

export default React.memo(TitlePage)
