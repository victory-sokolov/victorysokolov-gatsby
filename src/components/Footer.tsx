import React from "react";
import styled from "styled-components";
import { ContainerStyle } from "../assets/styles/GlobalStyles";
import SocialMedia from "./SocialMedias";

const FooterStyles = styled.footer`
  display: flex;
  background: ${props => props.theme.t.colorSchema.primary};
  color: #fff;
  text-align: center;
  font-size: 2rem;
  margin-top: 60px;

  .footer-content {
    a {
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1.4px;
    }
    p {
      font-size: 1.3rem;
    }
    ul {
      position: relative;
      right: 20px;
    }
  }
`

export function Footer() {
  return (
    <FooterStyles>
      <ContainerStyle>
        <div className="footer-content">
          <a href="/">
            <h6>ViktorSokolov.dev</h6>
          </a>
          <SocialMedia color="white" />
          <p>&copy; {new Date().getFullYear()}. All Rights Reserved</p>
        </div>
      </ContainerStyle>
    </FooterStyles>
  )
}
