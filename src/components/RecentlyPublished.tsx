import { Link } from "gatsby";
import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import styled from "styled-components";

const LatestContentContainer = styled.div`
  a {
    font-size: 1.5rem;
  }
`;

const LatestContentStyle = styled.article`
  max-width: 500px;
  padding-bottom: 30px;

  a {
    color: #222;

    &:hover {
      color: var(--primary-color);
    }

    svg {
      position: relative;
      top: 3px;
    }
  }
`

export default function RecentlyPublished({ data }: any) {

  const posts = data.allMdx.edges;

  return (
    <LatestContentContainer>
      <h2>Recently published</h2>
      {posts.map(post => (
        <LatestContentStyle key={post.node.id}>
          <Link to={`/blog/${post.node.frontmatter.slug}`}>
            <h3>{post.node.frontmatter.title}</h3>
          </Link>
          <p>{post.node.excerpt}</p>
          <Link to={`/blog/${post.node.frontmatter.slug}`}>
            Read more <BsArrowRight/>
          </Link>
        </LatestContentStyle>
      ))}
      <Link aria-label="Visit blog page" to="/blog">
        View all articles
      </Link>
    </LatestContentContainer>
  )
}