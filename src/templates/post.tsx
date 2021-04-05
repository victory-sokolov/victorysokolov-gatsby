import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"
import styled from "styled-components"
import { FeatureImage } from "../components/FeatureImage"
import { PostMetaInfo } from "../components/PostMetaInfo"

const ContentWrapper = styled.article`
  background-color: #fff;
  padding: 25px;
  max-width: 950px;
  position: relative;
  bottom: 100px;
  margin: 0 auto;
  box-shadow: var(--light-shadow);
  border-radius: 5px;

  h1 {
    /* text-align: center; */
    padding: 25px 0 15px;
    line-height: 2em;
  }

  p {
    line-height: 2.2em;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
    background: none;
    box-shadow: none;
    max-width: 100%;
    position: relative;
    bottom: 0;
  }
`

const singlePost = ({ data }) => {
  const featureImage =
    data.mdx.frontmatter.featureImage.childImageSharp.gatsbyImageData
  const date = data.mdx.frontmatter.date
  const readTime = data.mdx.fields.readingTime.text

  return (
    <>
      <FeatureImage image={featureImage} styles={{ height: "50vh" }} />
      <ContentWrapper>
        <h1>{data.mdx.frontmatter.title}</h1>
        <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </ContentWrapper>
    </>
  )
}

export default singlePost

export const pageQuery = graphql`
  query singlePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        slug
        featureImage {
          childImageSharp {
            gatsbyImageData(width: 1100, placeholder: BLURRED)
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
`
