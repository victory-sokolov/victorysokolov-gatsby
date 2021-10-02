import React, { useContext } from 'react';
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import styled, { ThemeContext } from 'styled-components';

const ToggleButton = styled.button`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  box-shadow: none;
  border: none;
  background-color: ${props => props.theme.titleColor};
  color: ${props => props.theme.pageBackground};
  transition: all 0.5s ease;
  padding: 1.2rem;
  border-radius: 50%;
  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    justify-content: flex-start;
  }
`

export const Toggle = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const icon =
    theme === "light" ? <HiMoon size={28} /> : <CgSun size={28} />

  return <ToggleButton onClick={toggleTheme}>{icon}</ToggleButton>
}
