import React from 'react';
import styled from 'styled-components';

const HeroStyles = styled.section`
    margin-top: 120px;

    p {
        line-height: 35px;
    }

    .hero-blob {
        position:absolute;
        right: 0;
        left:42px;

    }
`;

const Hero = () => {

    return (
        <HeroStyles>
            <svg className="hero-blob" width="288" height="271" viewBox="0 0 288 271" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M144.141 256.426C168.634 251.51 190.013 241.201 211.655 229.094C236.14 215.396 265.566 205.906 278.159 181.451C291.477 155.586 290.044 124.044 279.703 96.9417C269.589 70.4362 246.03 52.1866 222.45 35.4479C198.729 18.6086 173.333 -3.04767 144.141 0.71048C115.427 4.40707 103.632 38.1198 79.6727 53.8289C54.4382 70.3742 9.08509 66.1819 0.995571 94.5646C-7.20525 123.338 37.6931 141.44 46.5536 170.03C55.8041 199.879 28.7898 239.958 52.5823 261.022C75.6644 281.457 113.47 262.582 144.141 256.426Z" fill="#9ECAFE" fill-opacity="0.28"/>
            </svg>

            <h1>👋 Hi! I'm Viktor.</h1>
            <p>I’m a full-time software engineer mainly working with Node, TypeScript, React, Angular and OpenCV. Developing  Identity verification solution.In a past Freelancer developing various automation scripts using Python. Self-learning Artificial Inteligence and Computer Vision. Working on my first MVP product  🎉 </p>
        </HeroStyles>
    )
}

export default Hero;