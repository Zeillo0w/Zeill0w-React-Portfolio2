import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <section className='hero-container'>
      <div className='hero-content'>
        <h2>
          Cyber Security and Web Development Student
        </h2>
        <p>Passionate young Pentester | In love with Frontend Web Developpement and simple Animations </p>
      </div>

      <div className='hero-img'>
        <div>
          <div className='tech-icon'>
            <img src='./assets/images/react.png' alt='' />
          </div>
          <img src='./assets/images/photo.jpg' alt='' width='300' height='auto' />
        </div>

        <div>
          <div className='tech-icon'>
            <img src='./assets/images/html.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/css.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/python.png' alt='' />
          </div>
          <div className='tech-icon'>
            <img src='./assets/images/js.png' alt='' />
          </div>
        </div>
      </div> 
    </section>

  )
}

export default Hero