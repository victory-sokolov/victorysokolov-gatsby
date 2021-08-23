import React, { useEffect } from "react";
import styled from 'styled-components';

const CommentSection = styled.div`

  h2 {
    border-bottom: 3px solid #222;
    padding-bottom: 8px;
  }
`

const Comments = () => {

  const commentBox = React.createRef();

  useEffect(() => {

    const commentScript = document.createElement('script')
    const theme =
      typeof window !== 'undefined' && localStorage.getItem('theme') === 'dark'
        ? 'github-dark'
        : 'github-light';
    commentScript.async = true;
    commentScript.src = 'https://utteranc.es/client.js';
    commentScript.setAttribute("repo", "victory-sokolov/comments")
    commentScript.setAttribute('issue-term', 'pathname');
    commentScript.setAttribute('id', 'utterances');
    commentScript.setAttribute('theme', theme);
    commentScript.setAttribute('crossorigin', 'anonymous');

    if (commentBox && commentBox.current) {
      commentBox.current.appendChild(commentScript)
    }
  })

    return (
      <CommentSection>
        <h2>Comments</h2>
        <div ref={commentBox} />
      </CommentSection>
    )
}

export default Comments;
