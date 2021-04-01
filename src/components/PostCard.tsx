import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Card = styled.article`
    box-shadow: var(--light-shadow);
    background: #fff;
    border-radius: 15px;
    line-height: 1.5;
    color: #222;

    header {
        justify-content: center;
        padding: 2px 22px 10px 22px;
    }

    .post-title {
        text-align: center;
        color: #4c4c4c;
        letter-spacing: 1.7px;
        font-size: 2.5rem;
    }

    .post-description {
        font-size: 1.4rem;
        text-align: justify;
        color: var(--paragraph-color);
    }

    .post-meta {
        font-weight: 100;
        font-size: 1.5rem;
        display: flex;
        justify-content: space-between;
        color: #5b7a81;
    }

`;

export default function PostCard({title, date, slug, excerpt, image}: any) {

    return (
        <Card>
            <Link to={slug}>
                <img src="https://static.ghost.org/v3.0.0/images/welcome-to-ghost.png" alt=""/>
            </Link>
            <header>
                <Link to={slug}>
                    <h2 className="post-title">{title}</h2>
                </Link>
                <p className="post-description">
                    {excerpt}
                </p>
                <div className="post-meta">
                    <p>{date}</p>
                    <p>3 min read</p>
                </div>
            </header>
        </Card>
    )

}