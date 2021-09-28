import React from 'react';
import styled from 'styled-components';
import Blob from '../assets/images/Blob.svg';

const HeroStyles = styled.section`
    max-width: 650px;
    color: #fff;
    position: relative;
    top: 40px;
    font-size: 1.6rem;
    padding-bottom: 150px;

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

    return (
        <HeroStyles>
            <h1>👋 Hi! I'm Viktor.</h1>
            <p>I’m a full-time Software Engineer mainly working with Python, Node, TypeScript and React. In a past worked as a Freelancer, developed various automation scripts for E-commerce sites. I have a big passion for Software development</p>
        </HeroStyles>
    )
}
