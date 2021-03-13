import React from 'react';
import { FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import styled from 'styled-components';

const SocialMediaStyles = styled.div`

    li {
        display: inline-block;
        padding: 0 10px;
    }
`;

export default function SocialMedia({color}: any) {

    return (
        <SocialMediaStyles>
            <ul>
                <li>
                    <a href="https://twitter.com/VictorySokolov">
                    <FaTwitter color={color} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/sokolov-viktor">
                        <FaLinkedin color={color} />
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FaInstagram color={color} />
                    </a>
                </li>
            </ul>
        </SocialMediaStyles>

    )
}

