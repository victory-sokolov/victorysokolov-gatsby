import styled, { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
  :root {
    --red: #FF4949;
    --black: #2E2E2E;
    --yellow: #ffc600;
    --white: #fff;
    --grey: #efefef;
  }

  html {
    background-attachment: fixed;
    font-size: 10px;
  }

  body {
    font-size: 2rem;
    padding:0;
    margin: 0;
    font-family: 'Montserrat', sans-serif;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
  html {
    scrollbar-width: thin;
    scrollbar-color: #012C35;
  }
  body::-webkit-scrollbar-track {
    background: var(--white);
  }

  body::-webkit-scrollbar-thumb {
    background-color: #012C35;
    border-radius: 6px;
    border: 3px solid var(--white);
  }

  img {
    max-width: 100%;
  }

  ul {
    list-style-type:none;
    text-decoration: none;
  }

  a {
    text-decoration: none;
  }

  h1 {
    margin: 0;
  }

  .tilt {
    transform: rotate(-2deg);
    position: relative;
    display: inline-block;
  }

`;

const ContainerStyle = styled.div`
  max-width: 1110px;
  width: 100%;
  padding-left: 35px;
  padding-right: 35px;
  margin-left: auto;
  margin-right: auto;
`;

export {
  GlobalStyles,
  ContainerStyle
};
