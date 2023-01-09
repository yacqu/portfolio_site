import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';


import './HeroSlide.scss'
import programmerIcon from '../assets/images/img-3d-person-512.png'

function HeroSlide(props) {
  return (
    <div className='hero-slide-wrapper'>
      <div className='hero-slide-container'>
        <div className='hero-slide-content-container'>
          <div className='hero-slide-content-container-text'>
            <h3>Hello, There!</h3>
            <h2>My Name Is Yacqub Abdirahman</h2>
            <h1>I Build Cool Websites</h1>
          </div>
          <div className='hero-slide-content-container-interactive'>
            <button>
              button
            </button>
          </div>
        </div>
        <div className='hero-slide-sidecar-container'>
          <img src={programmerIcon} alt='img' />
        </div>
      </div>
    </div>
  )
}

export default HeroSlide