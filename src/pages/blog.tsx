import React from 'react';
import { graphql } from 'gatsby';
import { Pagination } from '../components/Pagination';
import PostCard from '../components/PostCard';
import { Grid } from '../assets/styles/Grid';
import { MainStyles, ContainerStyle } from '../assets/styles/GlobalStyles';
import styled from 'styled-components';

const GridExtended = styled(Grid)`
    grid-gap: 32px;
    margin-top: 40px;
    padding-bottom: 45px;
`;

const Blog = ({pageContext, data}: any) => {

    if (!data) return <p>No Post found!</p>;

    const { currentPage, numPages } = pageContext;

    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`;
    const nextPage = `/${currentPage + 1}`;

    const posts = data.allMdx.edges;

    console.log(posts);

    return (
         <MainStyles>
            <ContainerStyle>
                <h1>Blog Posts ↓</h1>
                <GridExtended cols='1fr 1fr 1fr'>
                    {posts.map(({node}: any) => (
                        <PostCard
                            key={node.frontmatter.slug}
                            slug={node.frontmatter.slug}
                            title={node.frontmatter.title}
                            date={node.frontmatter.date}
                            excerpt={node.frontmatter.excerpt}
                        />
                    ))}
                </GridExtended>
                <Pagination
                    isFirst={isFirst}
                    isLast={isLast}
                    prevPage={prevPage}
                    nextPage={nextPage}
                />
            </ContainerStyle>
        </MainStyles>
    )

}

export default Blog;

export const pageQuery = graphql`
    query AllPostsQuery($skip: Int!, $limit: Int!) {
        allMdx(
            sort: {fields: frontmatter___date, order: DESC}
            skip: $skip
            limit: $limit
            ) {
            edges {
                node {
                    frontmatter {
                        date(formatString: "MMMM DD, YYYY")
                        slug
                        excerpt
                        title
                    }
                }
            }
        }
    }
`;
