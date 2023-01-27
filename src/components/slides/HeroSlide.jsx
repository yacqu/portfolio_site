import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

import './HeroSlide.scss'
import programmerIcon from '../assets/images/img-3d-person-512.png'

function HeroSlide(props) {
  return (
    <div className='hero-slide-wrapper'>
      <div className='hero-slide-container'>
        <div className='hero-slide-content-container'>
          <div className='hero-slide-content-container-text'>
            <h3>Hello, There!</h3>
            <h2>My Name Is Yacqub Abdirahman,</h2>
            <h1>Web Developer</h1>
            <span>ReactJs / AngularJs / NodeJs</span>
          </div>
          <div className='hero-slide-content-container-interactive'>
            <button>
              Check Out My Stuff
            </button>
          </div>
          <div className="hero-slide-content-container-social">
            <a href='https://instagram.com' ><InstagramIcon /></a>
            <a href='https://linkedin.com' ><LinkedInIcon /></a>
            <a href='https://youtube.com' ><YouTubeIcon /></a>
            <a href='https://twitter.com' ><TwitterIcon /></a>
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