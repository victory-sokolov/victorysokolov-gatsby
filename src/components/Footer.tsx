import { Link } from "gatsby";
import React from "react";
import styled from "styled-components/macro";

import { ContainerStyle } from "../assets/styles/GlobalStyles";
import SocialMedia from "./SocialMedias";

const FooterStyles = styled.footer`
    display: flex;
    background: var(--primary-color);
    color: #fff;
    text-align: center;
    margin-top: 6rem;

    .footer-content {
        padding: 1rem;
        a {
            color: #fff;
            text-transform: uppercase;
            letter-spacing: 1.4px;
            font-weight: 600;
            font-size: 1.4rem;
        }
    }
`;

export const Footer: React.FC = () => {
    return (
        <FooterStyles>
            <ContainerStyle>
                <div className="footer-content">
                    <Link to="/" aria-label="Home">
                        VictorySokolov.dev
                    </Link>
                    <SocialMedia color="white" />
                    <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
                </div>
            </ContainerStyle>
        </FooterStyles>
    );
};
