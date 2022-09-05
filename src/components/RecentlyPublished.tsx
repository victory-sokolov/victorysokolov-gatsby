import { Link } from "gatsby";
import React from "react";
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components/macro";

import { P } from "./mdx";

const LatestContentContainer = styled.div`
    a {
        position: relative;
        text-decoration: none;
        &:before,
        &:after {
            content: "";
            position: absolute;
            transition: transform 0.5s ease;
        }
    }

    [aria-label="Visit blog page"] {
        position: relative;
        top: 2.5rem;
    }
`;

const LatestContentStyle = styled.article`
    max-width: 60rem;
    padding: 3rem 0;
    border-bottom: 2px solid #eee;
    a {
        font-size: inherit;
        svg {
            position: relative;
            top: 3px;
        }
    }
`;

const RecentlyPublished = ({ data }: any) => {
    const posts = data.allMdx.edges;

    return (
        <LatestContentContainer>
            <h2>Recently published</h2>
            <hr />
            {posts.map(post => (
                <LatestContentStyle key={post.node.id}>
                    <h3>
                        <Link to={`/blog/${post.node.frontmatter.slug}`} className="underline">
                            {post.node.frontmatter.title}
                        </Link>
                    </h3>
                    <P>{post.node.excerpt}</P>
                    <Link to={`/blog/${post.node.frontmatter.slug}`}>
                        Read more <BsArrowRight />
                    </Link>
                </LatestContentStyle>
            ))}
            <Link aria-label="Visit blog page" to="/blog">
                View all articles
            </Link>
        </LatestContentContainer>
    );
};

export default RecentlyPublished;
