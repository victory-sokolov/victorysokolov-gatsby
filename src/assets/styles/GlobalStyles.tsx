import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
    --primary-color: #383caa;
    --primary-gradient: linear-gradient(347deg, #3b128c 0%, #383caa 100%);
    --light-shadow: 0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);
    --hover-shadow: 0 25px 50px rgba(154,160,185,.05), 0 35px 80px rgba(166,173,201,.2);
    --link-color: #0d15ec;
    --scrollbar-color: #d6d6d6;
    --paragraph-color: #534a54;
    --dark-background: rgb(18, 15, 48);
    --selection: #364fc7;
  }

  html {
    background-attachment: fixed;
    font-size: 10px;
    scrollbar-width: thin;
    scrollbar-color: var(--scrollbar-color);
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    background: ${props => props.theme.t.colorSchema.background};
    color: ${props => props.theme.t.colorSchema.title};
    transition: all 0.50s linear;
    font-size: 1.4rem;
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
    color: ${props => props.theme.t.colorSchema.link};
  }

  h1,h2,h3,h4,h5,h6 {
    font-weight: 600;
    margin: 0;
  }

  h1 {
    font-size: 3.2rem;
    line-height: calc(3.2rem * 1.618);
  }

  h2 {
    font-size: 2.6rem;
    line-height: calc(2.6rem * 1.618);
  }

  h3 {
    font-size: 2rem;
    line-height: calc(2rem * 1.618);
  }

  p {
    font-size: 1.4rem;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

  a.anchor > svg {
    fill: ${props => props.theme.t.colorSchema.mode};
    padding-right: .4rem;
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    html {
      font-size: 8px;
    }
  }

`

const ContainerStyle = styled.div`
  max-width: 110rem;
  padding-left: 3.5rem;
  padding-right: 3.5rem;
  margin-left: auto;
  margin-right: auto;
`

const MainStyles = styled.main`
  flex-grow: 1;
  margin-top: 6rem;
  padding-bottom: 5rem;
`

export { GlobalStyles, ContainerStyle, MainStyles };

