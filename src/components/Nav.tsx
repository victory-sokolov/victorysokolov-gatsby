import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';


const NavStyles = styled.nav`
  z-index: 1;
  padding-bottom: 12px;
  margin-left: 25px;

  .menu li  {
    display: inline-block;
  }

  a {
    font-size: 1.4rem;
    letter-spacing: 2.2px;
    padding: 10px 0;
    margin: 0 20px;
    color: #ddd;
    position: relative;
    text-shadow: none;

    &:before {
      position: absolute;
      top: 0;
      left: 0;
      overflow: hidden;
      padding: 10px 0;
      max-width: 0;
      border-bottom: 2px solid #fff;
      color: #fff;
      content: attr(data-hover);
      transition: max-width 0.5s;
    }

    &:hover {

      &:before {
        max-width: 100%;
      }
    }
  }


  .toggler {
    opacity: 0;
  }

  @media (max-width: 768px) {

    .toggler {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 2;
      cursor: pointer;
      width: 40px;
      height: 40px;

      &:checked + .hamburger > div:before,
      &:checked + .hamburger > div:after {
          top: 0;
          transform: rotate(90deg);
      }

      &:checked + .hamburger > div {
        transform: rotate(135deg);
      }

      &:checked:hover + .hamburger > div {
        transform: rotate(225deg);
      }

      &:checked ~ .menu {
        visibility: visible;
      }

      &:checked ~ .menu > div {
        border-radius: 0;
        transform: scale(1);
        transition-duration: 0.75s;
      }

      &:checked ~ .menu > div > div {
        opacity: 1;
        transition:  opacity 0.4s ease 0.4s;
      }

    }

    .hamburger {
      position: absolute;
      top: 0;
      right: 0;
      z-index: 1;
      width: 35px;
      height: 35px;
      padding: 1rem;
      background: linear-gradient(90deg, rgba(53,96,197,1) 0%, rgba(98,22,216,1) 100%);
      display: flex;
      align-items: center;
      justify-content: center;

      div {
        position: relative;
        flex: none;
        width: 100%;
        height: 2px;
        background: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.4s ease;

        &:before,
        &:after {
          content: '';
          position: absolute;
          z-index: 1;
          top: -10px;
          width: 100%;
          height: 2px;
          background: inherit;
        }

        &:after {
          top: 10px;
        }
      }
    }

    .menu {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      visibility: hidden;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;

      ul {
        padding: 0;
      }

      & > div {
        background: rgba(24, 39, 51 , 0.85);
        border-radius: 50%;
        width: 200vw;
        height: 200vw;
        display: flex;
        flex: none;
        align-items: center;
        justify-content: center;
        transform: scale(0);
        transition: all 0.4s ease;
      }

    & > div > div {
      text-align: center;
      max-width: 90vw;
      max-height: 100vh;
      opacity: 0;
      transition: opacity 0.4s ease;
    }

    &  > div > div > ul > li {
      color: #fff;
      font-size: 1.5rem;
      padding: 1rem;
      text-align: center;
      line-height: 40px;
      display: block;
    }

    & > div > div > ul > li > a {
      text-decoration: none;
      transition: color 0.4s ease;
      font-size: 1.8rem;
      padding: 20px 0;
    }
  }
}
`;


export default function Nav() {

    return (
        <NavStyles>

          <input type="checkbox" className="toggler"/>

          <div className="hamburger">
            <div></div>
          </div>

          <div className="menu">
            <div>
              <div>
                <ul>
                  <li>
                    <Link data-hover="Blog" to="/blog">Blog</Link>
                  </li>
                  <li>
                    <Link data-hover="About" to="/about">About</Link>
                  </li>
                  <li>
                    <Link data-hover="Snippets" to="/about">Snippets</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </NavStyles>
    )
}