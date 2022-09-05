import styled, { createGlobalStyle } from "styled-components/macro";


export const lightTheme = {
    body: "#FFF",
    text: "#363537",
    toggleBorder: "#FFF",
    background: "#363537"
};

export const darkTheme = {
    body: "#363537",
    text: "#FAFAFA",
    toggleBorder: "#6B8096",
    background: "#999"
};

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --mode: #222;
    --white: #fff;
    --body: #fff;
    --grey: #efefef;
    --code: #1d1f21;
    --primary-color: linear-gradient(347deg, #3b128c 0%, #383caa 100%);
    --header: var(--primary-color);
    --light-shadow: 0 5px 10px rgba(154,160,185,.5), 0 15px 40px rgba(166,173,201,.2);
    --hover-shadow: 0 25px 50px rgba(154,160,185,.5), 0 35px 80px rgba(166,173,201,.2);
    --link-color: #9b87ff;
    --scrollbar-color: #d6d6d6;
    --paragraph-color: #534a54;
    --small-text: var(--link-color);
    --selection: #364fc7;
  }

  [data-theme="dark"] {
    --link-color: #9b87ff;
    --body: #19023c;
    --mode: #fff;
    --light-shadow: none;
    --small-text: #fff;
  }

  @font-face {
    font-family: 'Montserrat', sans-serif;
    src: local('Oxygen'), url('../fonts/Montserrat-Medium.ttf') format('truetype');
  }


  *, *:before, *:after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    background-attachment: fixed;
    font-size: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-color);
    scroll-behavior: smooth;
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: var(--body);
    color: var(--mode);
    transition: all 0.50s linear;
    font-size: 1.5rem;
    padding:0;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.618;
  }

  ::selection {
    background-color: var(--selection);
    color: #fff;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }

  button {
    background: var(--red);
    color: white;
    border: 0;
    padding: 0.6rem 1rem;
    border-radius: 2px;
    cursor: pointer;
    --cast: 2px;
    box-shadow: var(--cast) var(--cast) 0 var(--grey);
    text-shadow: 0.5px 0.5px 0 rgba(0,0,0,0.2);
    transition: all 0.2s;
    &:hover {
      --cast: 4px;
    }
  }

  .gatsby-image-wrapper img[src*=base64\\,] {
    image-rendering: -moz-crisp-edges;
    image-rendering: pixelated;
  }

  /* Scrollbar Styles */
  body::-webkit-scrollbar {
    width: 12px;
  }

  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: var(--scrollbar-color);
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
    height: auto;
    object-fit: cover;
  }

  ul {
    padding: 0;
    text-decoration: none;
  }

  a {
    text-decoration: none;
    font-size: 1.6rem;
    line-height: calc(18px * 1.618);
    color: var(--link-color);
  }

  h1,h2,h3,h4,h5,h6 {
    margin: 0;
  }

  h1 {
    font-size: 3.2rem;
    line-height: calc(3rem * 1.618);
  }

  h2 {
    font-size: 2.6rem;
    line-height: calc(2.6rem * 1.618);
  }

  h3 {
    font-size: 2rem;
    line-height: calc(2rem * 1.618);
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  a.anchor > svg {
    fill: var(--mode);
    padding-right: .4rem;
    position: relative;
    top: 1rem;
  }

   code {
        font-size: 1.5rem;
        line-height: 1.8rem;
        color: var(--code);
        background-color: #e9e9e9;
        border-radius: 5px;
        padding: 0 0.6rem;
    }

    pre {
        font-size: 1.6rem;
    }

  /* Custom */

  .center {
      text-align: center;
  }

  .uppercase {
    text-transform: uppercase;
  }

  .underline {
    &:before {
      left: 0;
      bottom: -4px;
      width: 100%;
      height: 1px;
      background: var(--link-color);
      transform: scaleX(0);
    }
    &:hover:before {
      transform: scaleX(1);
    }
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    html {
      font-size: 8px;
    }
  }
`;

const ContainerStyle = styled.div`
    max-width: 110rem;
    padding-left: 3.5rem;
    padding-right: 3.5rem;
    margin-left: auto;
    margin-right: auto;
`;

const MainStyles = styled.main`
    flex-grow: 1;
    margin-top: 6rem;
    padding-bottom: 5rem;
    position: relative;
`;

export { GlobalStyles, ContainerStyle, MainStyles };
