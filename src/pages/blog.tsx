import { graphql } from "gatsby"
import React from "react"
import styled from "styled-components"
import { Grid } from "../assets/styles/Grid"
import { Pagination } from "../components/Pagination"
import { PostCard } from "../components/PostCard"

const GridExtended = styled(Grid)`
  grid-gap: 32px;
  grid-template-columns: repeat(auto-fit, 320px);
  margin-top: 40px;
  padding-bottom: 45px;
  justify-content: unset;

  @media ${props => props.theme.breakpoints.mobile} {
    justify-content: center;
  }
`

const Blog = ({ pageContext, data }: any) => {
  if (!data) return <p>No Post found!</p>

  const { currentPage, numPages } = pageContext

  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = `/${currentPage + 1}`

  const posts = data.allMdx.edges
  console.log(posts)
  return (
    <>
      <h1>Blog Posts ↓</h1>
      <GridExtended cols="1fr 1fr 1fr">
        {posts.map(({ node }: any) => (
          <PostCard
            key={node.frontmatter.slug}
            slug={node.frontmatter.slug}
            title={node.frontmatter.title}
            date={node.frontmatter.date}
            excerpt={node.excerpt}
            image={
              node.frontmatter.featureImage.childImageSharp.gatsbyImageData
            }
            readTime={node.fields.readingTime.text}
          />
        ))}
      </GridExtended>
      <Pagination
        isFirst={isFirst}
        isLast={isLast}
        prevPage={prevPage}
        nextPage={nextPage}
      />
    </>
  )
}

export default Blog

export const pageQuery = graphql`
  query AllPostsQuery($skip: Int!, $limit: Int!) {
    allMdx(
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 120)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            featureImage {
              childImageSharp {
                gatsbyImageData(width: 320, placeholder: BLURRED)
              }
            }
          }
          fields {
            readingTime {
              text
            }
          }
        }
      }
    }
  }
`
