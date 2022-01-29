import React from 'react'

import './AboutCakeShop.scss'

function AboutCakeShop() {

    const listSkillCake = [
        { name: 'CAKE DESIGN', percent: '95%' },
        { name: 'CAKE CLASS', percent: '80%' },
        { name: 'CAKE RECIPES', percent: '90%' }
    ]
    return (
        <section className='about-cake-shop'>
            <div className='about-cake-shop-left'>
                <h3>ABOUT CAKE SHOP</h3>
                <h1>Cakes and bakes from the house of Queens!</h1>
                <span>The "Cake Shop" is a Jordanian Brand that started as a small family business. The owners are Dr. Iyad Sultan and Dr. Sereen Sharabati, supported by a staff of 80 employees.</span>
            </div>
            <div className='about-cake-shop-right'>
                { listSkillCake.map(item => (<div className='about-cake-skills' key={item.name}>
                    <div className='about-cake-skill-title'>
                        <span>{item.name}</span>
                        <span>{item.percent}</span>
                    </div>
                    <div className='cake-skill-progress-track'>
                        <span className='cake-skill-progress'/>
                    </div>
                </div>))}
            </div>
      </section>
    )
}

export default AboutCakeShop
