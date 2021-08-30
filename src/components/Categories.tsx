import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CategorieWrapperStyle = styled.div`
  span {
    background: var(--primary-color);
    border-radius: 10px;
    box-shadow: var(--light-shadow);
    text-align: center;
    letter-spacing: 1.2px;
    padding: 7px;
    color: white;
    font-size: 1.1rem;
  }
`
const CategorieStyle = styled.div`
  display: inline-block;
  padding-bottom: 5px;
  &:not(:first-child) {
    margin-left: 10px;
  }
`

export default function Categories({categories}: {categories: Array<string>}) {
    return (
      <CategorieWrapperStyle>
        {categories.map((category: string, index: number) => (
          <CategorieStyle key={index}>
            <span>{category}</span>
          </CategorieStyle>
        ))}
      </CategorieWrapperStyle>
    )
}