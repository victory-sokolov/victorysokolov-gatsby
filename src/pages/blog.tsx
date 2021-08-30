import { graphql } from "gatsby";
import { useReadTime } from '../hooks/useReadTime';
import React from "react";
import styled from "styled-components";
import site from "../../config/site";
import { Grid } from "../assets/styles/Grid";
import { Pagination } from "../components/Pagination";
import { PostCard } from "../components/PostCard";

const GridExtended = styled(Grid)`
  grid-gap: 55px;
  grid-template-columns: repeat(auto-fit, 330px);
  margin-top: 10px;
  justify-content: unset;

  @media ${props => props.theme.t.breakpoints.mobile} {
    justify-content: center;
  }
`;

const TopHeadline = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;


const Blog = ({ pageContext, data }: any) => {
  if (!data) return <p>No Post found!</p>

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const posts = data.allMdx.edges;

  return (
    <>
      <TopHeadline>
        <h2>Blog Posts ↓</h2>
        <h3>{posts.length} Articles</h3>
      </TopHeadline>
      <GridExtended cols="1fr 1fr 1fr">
        {posts.map(({ node }: any) => (
          <PostCard
            key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={
              node.frontmatter?.featureImage?.childImageSharp?.gatsbyImageData
            }
            readTime={useReadTime(node.body)}
          />
        ))}
      </GridExtended>
      {posts.length > site.postsPerPage && (
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      )}
    </>
  )
}

export default Blog

export const query = graphql`
  query allPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          body
          ...postQuery
        }
      }
    }
  }
`
