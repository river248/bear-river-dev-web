import React from 'react'
import { Routes, Route } from 'react-router-dom'

import HomePage from 'pages/HomePage/HomePage'
import Navigation from 'components/Navigation/Navigation'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'

function MainLayout() {
    return (
        <>
        <header><Header/></header>
        <nav><Navigation/></nav>
        <main>
            <div className='main-layout'>
                <Routes>
                    <Route path='' element={<HomePage/>}/>
                    <Route path='home' element={<HomePage/>}/>
                </Routes>
            </div>
        </main>
        <footer><Footer/></footer>
      </>
    )
}

export default MainLayout
