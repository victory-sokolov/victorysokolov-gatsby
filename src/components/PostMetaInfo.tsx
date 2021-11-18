import React from "react";
import styled from "styled-components";

type PostMetaInfo = {
  date: string,
  readTime: string,
  children?: React.ReactNode
}

export const MetaPostWrapper = styled.div`
  display: flex;
  align-items: center;
  font-weight: 100;
  font-size: 1.4rem;
  color: var(--small-text);
  padding-bottom: 1rem;

  svg {
    color: var(--primary-color);
  }
  span {
    margin-left: .5rem;
  }
  time:not(:first-child) {
    padding-left: 1rem;
  }
`
export const Time = styled.time`
  svg {
    padding-right: 1rem;
  }
`;

export const PostMetaInfo: React.FC<PostMetaInfo> = ({ date, readTime, children }) => {
  return (
    <MetaPostWrapper>
      <time dateTime={date} itemProp="datePublished">
        <span>
          {date} • {readTime}
        </span>
      </time>
      {children}
    </MetaPostWrapper>
  )
}
