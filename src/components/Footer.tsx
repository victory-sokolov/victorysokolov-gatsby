import React from 'react';
import styled from 'styled-components';
import SocialMedia from './SocialMedias';
import { ContainerStyle } from '../assets/styles/GlobalStyles';

const FooterStyles = styled.footer`
    display: flex;
    background: var(--primary-gradient);
    color: #fff;
    text-align: center;

    .footer-content {
        h6 {
            text-transform: uppercase;
            letter-spacing: 1.2px;
        }
        p {
            font-size: 1.2rem;
        }
        ul {
            position: relative;
            right: 12px;
        }
    }
`;

export default function Footer() {

    return (
        <FooterStyles>
            <ContainerStyle>
            <div className="footer-content">
                <h6>ViktorSokolov.dev</h6>
                    <SocialMedia color="white"/>
                <p>&copy; 2020. All Rights Reserved</p>
            </div>
            </ContainerStyle>
        </FooterStyles>
    )
}
