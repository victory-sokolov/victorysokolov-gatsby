import React from "react";
import styled from 'styled-components';
const LatestPostsStyle = styled.section`

    h3 {
        letter-spacing: 2px;
        text-transform: capitalize;
    }
`;

const LatestPosts = () => {

    return (
        <LatestPostsStyle>
            <h3>Recently published</h3>
        </LatestPostsStyle>
    )
}

export default LatestPosts;