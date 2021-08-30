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
  }

  body {
    background: ${props => props.theme.t.colorSchema.background};
    color: ${props => props.theme.t.colorSchema.title};
    transition: all 0.50s linear;
    font-size: 1.4rem;
    padding:0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    line-height: 1.8em;
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
  }

  ul {
    text-decoration: none;
  }

  a {
    text-decoration: none;
    font-size: 1.8rem;
    color: ${props => props.theme.t.colorSchema.link};
  }

  h1 {
    margin: 0;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }
`

const ContainerStyle = styled.div`
  max-width: 1100px;
  padding-left: 35px;
  padding-right: 35px;
  margin-left: auto;
  margin-right: auto;
`

const MainStyles = styled.main`
  flex-grow: 1;
  margin-top: 60px;
  padding-bottom: 50px;

  h1 {
    font-size: 3rem;
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    h1 {
      font-size: 2.5rem;
    }
  }
`

export { GlobalStyles, ContainerStyle, MainStyles };

