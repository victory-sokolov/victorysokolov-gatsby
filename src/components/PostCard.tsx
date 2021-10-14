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
  max-width: 35rem;
  transition: transform 0.5s;
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: scale3d(1.025, 1.025, 1);
  }

  img {
    height: 25rem;
    width: 35rem;
    object-fit: cover;
  }

  header {
    justify-content: center;
    padding: 0.2rem 2.2rem 1rem 2.2rem;
  }

  .post-title {
    text-align: center;
    color: #191919;
  }

  .post-description {
    color: var(--paragraph-color);
  }
`

export function PostCard({ title, date, slug, excerpt, image, readTime }: any) {
  return (
    <Card>
      <Link to={slug}>
        <FeatureImage image={image} alt={title}/>
        <header>
          <h3 className="post-title">{title}</h3>
          <P className="post-description">{excerpt}</P>
          <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
        </header>
      </Link>
    </Card>
  )
}
