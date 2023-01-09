import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'

import './NavBar.scss'

import gitHubLogo from '../assets/logos/img-github-30.png'
import linkedinLogo from '../assets/logos/img-linkedin-30.png'
import navbarLogo from '../assets/images/img-3d-design.png'


function NavBar() {
    
  return (
    <NavBarWrapper>
        <div className='above-nav-bar-wrapper'>
            <div className='above-nav-bar-container'>
                <button>
                    <img src={gitHubLogo} alt='GHLogo' />
                </button>
                <button>
                    <img src={linkedinLogo} alt='LDLogo' />
                </button>
            </div>
        </div>
        <div className='nav-bar-wrapper'>
            <div className='nav-bar-container'>
                <div className='nav-bar-logo-container'>
                    <img src={navbarLogo} alt='navlogo' />
                </div>
                <div className='nav-bar-content-container'>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>Home</NavLink> 
                            </li>
                            <li>
                                <NavLink to='/about'>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>Contact</NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </NavBarWrapper>
  )
}

export default NavBar

const NavBarWrapper = styled.div`
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



