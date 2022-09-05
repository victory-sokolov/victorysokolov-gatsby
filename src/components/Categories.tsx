import React from "react";
import styled from "styled-components/macro";

type Category = {
    categories: string[];
};

const CategorieWrapperStyle = styled.div`
    padding: 0.5rem 0;
    span {
        background: var(--primary-color);
        box-shadow: var(--light-shadow);
        border-radius: 10px;
        text-align: center;
        letter-spacing: 1.2px;
        padding: 0.7rem;
        color: white;
        font-size: 1.1rem;
        letter-spacing: 1.4px;
        font-weight: 500;
    }
`;
const CategorieStyle = styled.div`
    display: inline-block;
    padding-bottom: 0.5rem;
    &:not(:first-child) {
        margin-left: 1rem;
    }
`;
const Categories: React.FC<Category> = ({ categories, style }) => {
    return (
        <CategorieWrapperStyle style={{ ...style }}>
            {categories
                .map((category: string) => category.trim())
                .filter(category => category.length > 0)
                .map((category: string, index: number) => (
                    <CategorieStyle key={index}>
                        <span>{category}</span>
                    </CategorieStyle>
                ))}
        </CategorieWrapperStyle>
    );
};

export default Categories;
