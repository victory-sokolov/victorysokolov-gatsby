import { Link } from "gatsby";
import React from "react";
import styled from "styled-components/macro";

import { FeatureImage } from "./FeatureImage";
import { PostMeta } from "./PostMetaInfo";
import { P } from "./mdx";

const Card = styled.div`
    box-shadow: var(--light-shadow);
    background: #fff;
    border-radius: 8px;
    color: #222;
    position: relative;
    max-width: 34rem;
    margin-bottom: 2rem;
    transition: transform 0.5s;

    &:hover {
        transform: scale3d(1.025, 1.025, 1);
    }

    .post-meta-data {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 100%;

        > *:last-child {
            padding: 0 2rem 1.5rem;
        }
    }

    .post-title {
        text-align: center;
        color: #191919;
        margin-top: 1rem;
        &:hover {
            color: var(--link-color);
            transition: 0.5s;
        }
    }

    .post-data {
        flex: 1 1 auto;
        padding: 0.2rem 2.2rem 1rem 2.2rem;
    }

    .post-description {
        color: var(--paragraph-color);
        margin-bottom: 0;
    }

    @media ${props => props.theme.t.breakpoints.mobile} {
        max-width: 40rem;
    }
`;

export const PostCard: React.FC<any> = ({ title, date, slug, excerpt, image, readTime, id }) => {
    return (
        <Card key={id}>
            <Link to={slug} aria-label={title}>
                <div className="post-meta-data">
                    <FeatureImage image={image} alt={title} style={{ height: "22rem", objectFit: "cover" }} />
                    <div className="post-data">
                        <h3 className="post-title">{title}</h3>
                        <P classNamnpm oue="post-description">{excerpt}</P>
                    </div>
                    <PostMeta date={date} readTime={readTime}></PostMeta>
                </div>
            </Link>
        </Card>
    );
};
