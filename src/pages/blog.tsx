import { graphql } from "gatsby";
import { useReadTime } from '../hooks/useReadTime';
import React from "react";
import styled from "styled-components";
import { Grid } from "../assets/styles/Grid";
import { Pagination } from "../components/Pagination";
import { PostCard } from "../components/PostCard";
import Seo from '../components/seo';
import { GatsbyProps } from '../types';

const GridExtended = styled(Grid)`
  grid-gap: 5.5rem;
  grid-template-columns: repeat(auto-fit, 33rem);
  margin-top: 1rem;
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

const Blog: React.FC<GatsbyProps> = ({ pageContext, data }) => {
  if (!data) return <p>No Post found!</p>

  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`
  const posts = data.post.edges;

  return (
    <>
      <Seo title="Blog posts" slug="blog" />
      <TopHeadline>
        <h2>Blog Posts ↓</h2>
        <h3>{posts.length} Articles</h3>
      </TopHeadline>
      <GridExtended cols="1fr 1fr 1fr">
        {posts.map(({node}: any) => (
          <PostCard
            key={node.id}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={
              node.frontmatter.featureImage.childImageSharp.gatsbyImageData
            }
            readTime={useReadTime(node.body)}
          />
        ))}
      </GridExtended>
      {posts.length > Number(process.env.GATSBY_PAGE_SIZE) && (
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
  query allPostsQuery(
    $skip: Int
    $limit: Int
  ) {
    post: allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      filter: { fileAbsolutePath: { regex: "//posts//" } }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          body
            ...Post
        }
      }
    }
  }
`
