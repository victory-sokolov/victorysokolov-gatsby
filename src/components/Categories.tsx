import React from 'react';
import styled from 'styled-components';

const CategoriesStyle = styled.a`
    background: var(--primary-color);
    border-radius: 10px;
    box-shadow: var(--light-shadow);
    text-align: center;
    letter-spacing: 1.2px;
    cursor: pointer;
    padding: 5px;
    color: white;
    font-size: 1.1rem;
    margin-left:15px;

    &:hover {
        filter: brightness(120%);
    }
`;

export default function Categories({categories}: {categories: Array<string>}) {

    return (
        categories.map((category: string) => (
            <span>
                <CategoriesStyle>
                    {category}
                </CategoriesStyle>
            </span>
        ))
    )
}