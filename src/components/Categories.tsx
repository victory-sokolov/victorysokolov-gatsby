import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const CategorieWrapperStyle = styled.div`
  padding: 2rem 0;
  span {
    background: var(--primary-color);
    border-radius: 10px;
    box-shadow: var(--light-shadow);
    text-align: center;
    letter-spacing: 1.2px;
    padding: .7rem;
    color: white;
    font-size: 1.1rem;
  }
`
const CategorieStyle = styled.div`
  display: inline-block;
  padding-bottom: .5rem;
  &:not(:first-child) {
    margin-left: 1rem;
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