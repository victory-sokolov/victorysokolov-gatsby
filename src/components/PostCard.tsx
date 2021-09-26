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
  border-radius: 15px;
  color: #222;
  position: relative;
  max-width: 35rem;
  transition: transform .5s;
  &:hover {
    box-shadow: var(--hover-shadow);
    transform: scale3d(1.025, 1.025, 1);
  }

  header {
    justify-content: center;
    padding: 2px 22px 10px 22px;
  }

  .post-title {
    text-align: center;
    color: #4c4c4c;
    letter-spacing: 1.5px;
  }

  .post-description {
    color: var(--paragraph-color);
  }
`

export function PostCard({ title, date, slug, excerpt, image, readTime }: any) {
  return (
    <Card>
      <Link to={slug}>
        <FeatureImage image={image} styles={{ height: "220px" }} />
        <header>
          <h3 className="post-title">{title}</h3>
          <P className="post-description">{excerpt}</P>
          <PostMetaInfo date={date} readTime={readTime}></PostMetaInfo>
        </header>
      </Link>
    </Card>
  )
}
