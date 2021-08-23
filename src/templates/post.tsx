import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";
import Categories from '../components/Categories';
import Comments from '../components/Comments';
import { FeatureImage } from "../components/FeatureImage";
import { PostMetaInfo } from "../components/PostMetaInfo";
import {useReadTime} from "../hooks/useReadTime";

const BlogWrapper = styled.div`
  max-width: 950px;
`

const ContentWrapper = styled.article`
  margin: 0 auto;
  padding-bottom: 50px;

  h1 {
    padding: 25px 0 15px;
    line-height: 3rem;
  }

  p {
    line-height: 2.2em;
  }

  code {
    font-family: "Roboto Mono, monospace";
    font-size: 1.5rem;
    line-height: 1.8rem;
    color: #fff;
    background-color: ${props => props.theme.t.colors.dark3};
    padding: 0 0.3rem;
  }

  pre {
    font-size: 1.6rem;
  }

  @media ${props => props.theme.t.breakpoints.mobile} {
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
  const article = data.mdx.body;
  const readTime = useReadTime(article);
  const tags = data.mdx.frontmatter.tags.split(",");
  return (
    <BlogWrapper>
      <FeatureImage image={featureImage} styles={{ height: "50vh" }} />
      <ContentWrapper>
        <h1>{data.mdx.frontmatter.title}</h1>
        <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
        <Categories categories={tags} />
        <MDXRenderer>{article}</MDXRenderer>
      </ContentWrapper>
      <Comments />
    </BlogWrapper>
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
        tags
        featureImage {
          childImageSharp {
            gatsbyImageData(width: 1100, placeholder: BLURRED)
          }
        }
      }
    }
  }
`
