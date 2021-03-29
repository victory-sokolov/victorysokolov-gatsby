import React from 'react';
import styled from 'styled-components';
import Blob from '../assets/images/Blob.svg';

const HeroStyles = styled.section<{ isRootUrl: boolean }>`
    max-width: 650px;
    color: #fff;
    position: relative;
    top: 40px;
    font-size: 1.6rem;
    padding-bottom: 150px;
    display: ${p => (p.isRootUrl ? 'block' : 'none') };

    p {
        line-height: 35px;

        &:before {
            content: '';
            height: 150px;
            width: 150px;
            background-image: url(${Blob});
            background-repeat: no-repeat;
            background-size: 150px 150px;
            position: absolute;
            top: 14%;
        }
    }

`;

export default function Hero() {

    const isRootUrl = (location.pathname === '/') ? true : false;
    console.log(isRootUrl);

    return (
        <HeroStyles isRootUrl={isRootUrl}>
            <h1>👋 Hi! I'm Viktor.</h1>
            <p>I’m a full-time software engineer mainly working with Node, TypeScript, React, Angular and OpenCV. Developing  Identity verification solution.In a past Freelancer developing various automation scripts using Python. Self-learning Artificial Inteligence and Computer Vision. Working on my first MVP product  🎉 </p>
        </HeroStyles>
    )
}
