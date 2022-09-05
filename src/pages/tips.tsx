import { graphql } from "gatsby";
import React from "react";
import { GatsbyProps } from "src/common/types";
import styled from "styled-components/macro";

import { PostCard } from "../components/PostCard";
import Seo from "../components/seo";
import { GridExtended } from "./blog";

const DevelopmentTipsTop = styled.div`
    padding-bottom: 2rem;
    text-align: center;
`;

const TipsContainer = styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(auto-fit, 33rem);
    justify-content: center;
    gap: 2rem;
    margin-top: 4rem;

    article {
        width: 100%;
        max-width: 50rem;
    }
`;

const Tips: React.FC<GatsbyProps> = ({ data }) => {
    if (!data) return <p>No Tips found!</p>;

    const tips = data.tips.edges;

    return (
        <>
            <Seo title="Developments tips" slug="tips" />
            <DevelopmentTipsTop>
                <h1>🔥 Hot Development Tips</h1>
                <p>
                    Development tips that i share on my &nbsp;
                    <a href="https://twitter.com/VictorySokolov" target="_blank" rel="noreferrer">
                        Twitter account
                    </a>
                </p>
            </DevelopmentTipsTop>
            <GridExtended>
                {tips.map(({ node }: any) => (
                    <PostCard
                        key={node.id}
                        id={node.id}
                        slug={node.frontmatter.slug}
                        title={node.frontmatter.title}
                        date={node.frontmatter.date}
                        excerpt={node.frontmatter.description.substring(0, 100) + "..."}
                        image={node.frontmatter.featureImage?.childImageSharp.gatsbyImageData}
                        categories={node.frontmatter.tags}
                    />
                ))}
            </GridExtended>
        </>
    );
};

export default Tips;

export const query = graphql`
    query allTipsQuery {
        tips: allMdx(filter: { internal: { contentFilePath: { regex: "//tips//" } } }) {
            edges {
                node {
                    ...tipQuery
                }
            }
        }
    }
`;
