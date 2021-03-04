import React from "react";
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FaMoon } from "react-icons/fa";
import "normalize.css"

const HeaderStyles = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #012C35;
  padding: 30px 10%;

  .wave {
    position: absolute;
    top: 125px;
    left: 0;
    transform: rotate(180deg);
    fill: #012C35;
    width: 100%;
  }

  li {
    display: inline-block;
    padding: 0 20px;
  }

  a {
    color: #fff;
    font-size: 22px;
    font-weight: 300;
    letter-spacing: 2px;
    transition: all 0.3s ease 0s;
  }

  .color-mode {
    z-index:10;
    fill: white;
  }
`;


const Nav = () => {

    return (
      <HeaderStyles>
        <svg preserveAspectRatio="none" className="wave" height="74" viewBox="0 0 1440 74"><path d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"></path></svg>
        <h1>
          <a href="/">Viktor Sokolov</a>
        </h1>
        <nav>
          <ul>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/about">Snippets</Link>
            </li>
          </ul>
        </nav>

        <a href="#" >
          <FaMoon className="color-mode" />
        </a>


      </HeaderStyles>

    )
}

export default Nav