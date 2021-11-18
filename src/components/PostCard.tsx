import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";
import { FeatureImage } from "./FeatureImage";
import { P } from './mdx';
import { PostMetaInfo } from "./PostMetaInfo";

const Card = styled.article`
  display: grid;
  grid-auto-rows: 1fr;
  box-shadow: var(--light-shadow);
  background: #fff;
  border-radius: 8px;
  color: #222;
  position: relative;
  max-width: 34rem;
  margin-bottom: 2rem;
  transition: transform 0.5s;
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: scale3d(1.025, 1.025, 1);
  }

  header {
    justify-content: center;
    padding: 0.2rem 2.2rem 1rem 2.2rem;
  }

  .post-title {
    text-align: center;
    color: #191919;
    margin-top: 1.5rem;
  }

  .post-description {
    color: var(--paragraph-color);
  }
`

export const PostCard: React.FC<any> = ({ title, date, slug, excerpt, image, readTime }) => {
  return (
    <Card>
      <Link to={slug} aria-label={title}>
        <FeatureImage image={image} alt={title} style={{ height: "25rem", objectFit: "cover"}}/>
        <header>
          <h3 className="post-title">{title}</h3>
          <P className="post-description">{excerpt}</P>
          <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
        </header>
      </Link>
    </Card>
  )
}
