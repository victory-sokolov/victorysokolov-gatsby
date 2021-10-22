import React from "react";
import styled from "styled-components";
import { ContainerStyle } from "../assets/styles/GlobalStyles";
import SocialMedia from "./SocialMedias";
import { Link } from 'gatsby';

const FooterStyles = styled.footer`
  display: flex;
  background: var(--primary-color);
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-top: 6rem;

  .footer-content {
    padding: 1.6rem;
    a {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1.4px;
    }
  }
`

export const Footer: React.FC = () => {
  return (
    <FooterStyles>
      <ContainerStyle>
        <div className="footer-content">
          <Link to="/">
            <h6>ViktorSokolov.dev</h6>
          </Link>
          <SocialMedia color="white" />
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </ContainerStyle>
    </FooterStyles>
  )
}
