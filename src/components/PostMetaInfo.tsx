import React from "react"
import styled from "styled-components"

export const MetaPostWrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  font-weight: 100;
  font-size: 1.5rem;
  color: #5b7a81;

  small:not(:first-child) {
    margin-left: 1.5rem;
  }
`

export const PostMetaInfo = ({ date, readTime }) => {
  return (
    <MetaPostWrapper>
      <small>
        <time dateTime={date} itemProp="datePublished">
          {date}
        </time>
      </small>
      <small>
        <span title="Estimated read time">{readTime}</span>
      </small>
    </MetaPostWrapper>
  )
}
