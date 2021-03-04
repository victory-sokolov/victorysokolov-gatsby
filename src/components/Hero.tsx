import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.section`
    margin-top: 120px;

    p {
        line-height: 35px;
    }
`;

const Hero = () => {

    return (
        <HeroStyles>
            <h1>👋 Hi! I'm Viktor.</h1>
            <p>I’m a full-time software engineer mainly working with Node, TypeScript, React, Angular and OpenCV. Developing  Identity verification solution.In a past Freelancer developing various automation scripts using Python. Self-learning Artificial Inteligence and Computer Vision. Working on my first MVP product  🎉 </p>
        </HeroStyles>
    )
}

export default Hero;