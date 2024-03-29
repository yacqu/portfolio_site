import React from 'react'
import styled from 'styled-components';
import Cards from '../../cards/Cards';
import NavBar from '../../navbar/NavBar';
import HeroSlide from '../../slides/HeroSlide';

import '../../styles/HomePage.scss'

function HomePage() {
  return (
    <>
      <HomePageWrapper>
        <NavBar />
        <HeroSlide />
        <Cards />
      </HomePageWrapper>
    </>
  )
}

export default HomePage

const HomePageWrapper = styled.div`
padding: 0%;
display: flex;
flex-direction: column;
`;