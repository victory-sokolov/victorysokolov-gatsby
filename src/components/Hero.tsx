import React from 'react';
import styled from 'styled-components';
import Blob from '../assets/images/Blob.svg';

const HeroStyles = styled.section`
  max-width: 65rem;
  color: #fff;
  position: relative;
  padding: 2rem 0 10rem;

  p {
    line-height: 3.5rem;
    font-size: 1.6rem;
    &:before {
      content: "";
      height: 15rem;
      width: 15rem;
      background-image: url(${Blob});
      background-repeat: no-repeat;
      background-size: 15rem 15rem;
      position: absolute;
      top: 14%;
    }
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    padding: 2rem 0;
  }
`

const Hero: React.FC = () => {

    return (
      <HeroStyles>
        <h1 itemProp="headline">👋 Hi! I'm Viktor.</h1>
        <p>
          I’m a full-time Software Engineer mainly working with Python, Node,
          TypeScript and React. In a past worked as a Freelancer, developed
          various automation scripts for E-commerce sites. I have a big passion
          for Software development
        </p>
      </HeroStyles>
    )
}

export default Hero;
