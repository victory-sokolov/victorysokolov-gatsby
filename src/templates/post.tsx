import { P } from '../components/mdx';
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import styled from "styled-components";
import Categories from '../components/Categories';
import Comments from '../components/Comments';
import { FeatureImage } from "../components/FeatureImage";
import { PostMetaInfo } from "../components/PostMetaInfo";
import {useReadTime} from "../hooks/useReadTime";
import { MDXProvider } from '@mdx-js/react';
import Seo from '../components/seo'

const BlogWrapper = styled.div`
  max-width: 95rem;
`

const ContentWrapper = styled.article`
  margin: 0 auto;
  padding-bottom: 5rem;

  h1 {
    padding: 2.5rem 0 1rem;
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

const singlePost: React.FC = ({ data }) => {
  const post = data.post.frontmatter;
  const featureImage = post.featureImage.childImageSharp.gatsbyImageData;
  const date = post.date;
  const article = data.post.body;
  const title = post.title;
  const readTime = useReadTime(article);
  const tags = post.tags.split(",");

  const components = {
    p: P,
  }

  return (
    <>
      <BlogWrapper>
        <Seo
          title={post.title}
          description={post.description}
          slug={post.slug}
          ogImage={featureImage}
          keywords={tags}
        />
        <FeatureImage
          image={featureImage}
          alt={post.title}
          style={{height: "40rem"}}
        />
        <ContentWrapper>
          <h1>{title}</h1>
          <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
          <Categories categories={tags} />
          <MDXProvider components={components}>
            <MDXRenderer>{article}</MDXRenderer>
          </MDXProvider>
        </ContentWrapper>
        <Comments />
      </BlogWrapper>
    </>
  )
}

export default singlePost

export const pageQuery = graphql`
  query singlePostQuery($id: String) {
    post: mdx(id: { eq: $id }) {
      body
      ...postQuery
      frontmatter {
        featureImage {
          ...imageQuery
        }
      }
    }
  }
`
