import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled from "styled-components";
import {useState} from 'react';

const CloseIcon = styled.div`
  @media ${props => props.theme.t.breakpoints.mobile} {
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
      content: "";
      position: absolute;
      z-index: 1;
      top: -10px;
      width: 100%;
      height: 2px;
      background: #fff;
    }

    &:after {
      top: 10px;
    }
  }
`

const Menu = styled.div`
 @media ${props => props.theme.t.breakpoints.mobile} {
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

    div {
      background: rgba(63, 81, 189, 0.9);
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
    }
 }
`

const LinkItem = styled.li`
  display: inline-block;
  @media ${props => props.theme.t.breakpoints.mobile} {
    color: #fff;
    font-size: 1.5rem;
    padding: 1rem;
    text-align: center;
    line-height: 40px;
    display: block;
  }
`

const Link = styled(GatsbyLink)`
  font-size: 1.4rem;
  letter-spacing: 2.2px;
  padding: 13px 0;
  margin: 0 20px;
  color: #ddd;
  position: relative;
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

  @media ${props => props.theme.t.breakpoints.mobile} {
    text-decoration: none;
    transition: color 0.4s ease;
    font-size: 1.8rem;
    padding: 20px 0;
  }
`

const NavStyles = styled.nav`
  z-index: 1;
  margin-left: 25px;
`

const Hamburger = styled.div`
  @media ${props => props.theme.t.breakpoints.mobile} {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 30px;
    height: 30px;
    padding: 1rem;
    background: linear-gradient(
      90deg,
      rgba(53, 96, 197, 1) 0%,
      rgba(98, 22, 216, 1) 100%
    );
    display: flex;
    align-items: center;
    justify-content: center;

    ${({ isOpen }: {isOpen:boolean}) =>
      isOpen
        ? `
        div {
          transform: rotate(135deg);
        }
        div:before,
        div:after {
            top: 0;
            transform: rotate(90deg);
        }
        ~ ${Menu} {
          visibility: visible;
          div {
            border-radius: 0;
            transform: scale(1);
            transition-duration: 0.75s;
          }
        }
        `
        : "div{transform: rotate(0deg)}"}
  }
`

export default function Nav() {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <NavStyles>
      <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <CloseIcon />
      </Hamburger>
      <Menu>
        <div>
          <ul>
            <LinkItem>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                data-hover="Blog"
                to="/blog"
                aria-label="Blog posts page"
              >
                Blog
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                data-hover="About"
                to="/about"
                aria-label="About me page"
              >
                About
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                onClick={() => setIsOpen(!isOpen)}
                data-hover="Uses"
                to="/uses"
                aria-label="Uses page"
              >
                Uses
              </Link>
            </LinkItem>
          </ul>
        </div>
      </Menu>
    </NavStyles>
  )
}
