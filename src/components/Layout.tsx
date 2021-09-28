import "normalize.css";
import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, theme as t } from "../../config/theme";
import {
  ContainerStyle,
  GlobalStyles,
  MainStyles
} from "../assets/styles/GlobalStyles";
import { useDarkMode } from '../hooks/useDarkMode';
import { Footer } from "./Footer";
import { Header } from "./Header";

const SiteWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
`

export default function Layout({ children }: any) {
  const [theme, toggleTheme] = useDarkMode()
  const mode = theme === "light" ? lightTheme : darkTheme
  t.colorSchema = mode;

  return (
    <ThemeProvider theme={{ t, theme, toggleTheme }}>
      <SiteWrapper>
        <GlobalStyles />
        <Header />
        <MainStyles>
          <ContainerStyle>{children}</ContainerStyle>
        </MainStyles>
        <Footer />
      </SiteWrapper>
    </ThemeProvider>
  )
}
