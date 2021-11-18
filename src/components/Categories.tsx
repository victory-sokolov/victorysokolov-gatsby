import React from 'react';
import styled from 'styled-components';

type Category = {
  categories: string[]
}

const CategorieWrapperStyle = styled.div`
  padding: .5rem 0;
  span {
    background: var(--primary-color);
    box-shadow: var(--light-shadow);
    border-radius: 10px;
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
const Categories: React.FC<Category> = ({ categories, style }) => {

  return (
    <CategorieWrapperStyle style={{...style}}>
      {categories.map((category: string, index: number) => (
        <CategorieStyle key={index}>
          <span>{category}</span>
        </CategorieStyle>
      ))}
    </CategorieWrapperStyle>
  )
}

export default Categories;
