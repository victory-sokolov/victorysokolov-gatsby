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
  padding: 1rem;
  border-radius: 50%;
  &:focus {
    outline: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  svg {
    width: 2.8rem;
    height: 2.8rem;
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
    justify-content: flex-start;
  }
`

export const Toggle: React.FC = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);
  const icon =
    theme === "light" ? <HiMoon /> : <CgSun />

  return <ToggleButton onClick={toggleTheme}>{icon}</ToggleButton>
}
