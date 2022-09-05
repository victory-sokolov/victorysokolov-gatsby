import { graphql } from "gatsby";
import React from "react";
import styled from "styled-components/macro";

import { Grid } from "../assets/styles/Grid";
import { Pagination } from "../components/Pagination";
import { PostCard } from "../components/PostCard";
import Seo from "../components/seo";
import { useReadTime } from "../hooks/useReadTime";
import { GatsbyProps } from "../types";

export const GridExtended = styled(Grid)`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, 33rem);
    margin-top: 1rem;

    @media ${props => props.theme.t.breakpoints.mobile} {
        grid-template-columns: repeat(auto-fit, 40rem);
    }
`;

const TopBlogMeta = styled.div`
    padding-bottom: 1.5rem;
    @media ${props => props.theme.t.breakpoints.tablet} {
        text-align: center;
    }
`;

const Blog: React.FC<GatsbyProps> = ({ pageContext, data }) => {
    if (!data) return <p>No Post found!</p>;

    const { currentPage, numPages } = pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;
    const posts = data.post.edges;

    return (
        <>
            <Seo title="Blog posts" slug="blog" />
            <TopBlogMeta>
                <h2>Blog Posts ↓</h2>
                <h4>{posts.length} Articles</h4>
            </TopBlogMeta>
            <GridExtended cols="1fr 1fr 1fr">
                {posts.map(({ node }: any) => (
                    <PostCard
                        key={node.id}
                        id={node.id}
                        slug={node.frontmatter.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        excerpt={node.excerpt}
                        image={node.frontmatter.featureImage.childImageSharp.gatsbyImageData}
                        readTime={useReadTime(node.body)}
                    />
                ))}
            </GridExtended>
            {posts.length > Number(process.env.GATSBY_PAGE_SIZE) && (
                <Pagination isFirst={isFirst} isLast={isLast} prevPage={prevPage} nextPage={nextPage} />
            )}
        </>
    );
};

export default Blog;

export const query = graphql`
    query allPostsQuery($skip: Int, $limit: Int) {
        post: allMdx(
            sort: { fields: frontmatter___date, order: DESC }
            filter: { frontmatter: { published: { eq: true } } }
            skip: $skip
            limit: $limit
        ) {
            edges {
                node {
                    id
                    body
                    ...Post
                }
            }
            nodes {
                internal {
                    contentFilePath
                }
            }
        }
    }
`;
