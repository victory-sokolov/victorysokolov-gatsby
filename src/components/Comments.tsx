import React, { useEffect } from "react";
import styled from "styled-components";

const CommentSection = styled.div`
    margin-top: 10rem;
    h2 {
        border-bottom: 2px solid var(--mode);
        padding-bottom: 0.8rem;
    }
`;

const Comments: React.FC = () => {
    const commentBox = React.createRef<HTMLDivElement>();

    useEffect(() => {
        const commentScript = document.createElement("script");
        commentScript.async = true;
        commentScript.src = "https://utteranc.es/client.js";
        commentScript.setAttribute("repo", "victory-sokolov/comments");
        commentScript.setAttribute("issue-term", "pathname");
        commentScript.setAttribute("id", "utterances");
        commentScript.setAttribute("theme", "github-light");
        commentScript.setAttribute("crossorigin", "anonymous");

        if (commentBox && commentBox.current) {
            commentBox.current.appendChild(commentScript);
        }
    }, []);

    return (
        <CommentSection>
            <h2>Comments</h2>
            <div ref={commentBox} />
        </CommentSection>
    );
};

export default Comments;
