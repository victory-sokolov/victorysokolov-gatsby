import { MDXProvider } from "@mdx-js/react";
import { Link, graphql } from "gatsby";
import React from "react";
import { GatsbyProps } from "src/common/types";

import Categories from "../components/Categories";
import Seo from "../components/seo";
import { NextPreviousItem } from "./post";

const TipTemplate: React.FC<GatsbyProps> = ({ data, pageContext }) => {
    const tip = data.tip?.frontmatter;
    if (!tip) {
        return <h1>Tip is not found!</h1>;
    }

    const date = new Date(tip.date).toDateString();
    const tags = tip.tags.split(" ");
    const { next, prev } = pageContext;

    return (
        <>
            <Seo title={tip.title} slug={tip.slug} />
            <h1>{tip.title}</h1>
            <MDXProvider components={{}}>{data.tip.body}</MDXProvider>
            <p>{tip.description}</p>
            <Categories categories={tags} />
            <p>
                Posted on &nbsp;
                <a href={tip.tweetUrl} target="_blank" rel="noreferrer">
                    Twitter
                </a>{" "}
                &nbsp; on {date}.
            </p>
            <NextPreviousItem>
                {prev && (
                    <div className="previous-item">
                        <p>⇠ Previous tip</p>
                        <Link to={`/tips/${prev.frontmatter.slug}`}>{prev.frontmatter.title}</Link>
                    </div>
                )}

                {next && (
                    <div className="next-item">
                        <p>Next tip ⇢</p>
                        <Link to={`/tips/${next.frontmatter.slug}`}>{next.frontmatter.title}</Link>
                    </div>
                )}
            </NextPreviousItem>
        </>
    );
};

export default TipTemplate;

export const query = graphql`
    query ($id: String) {
        tip: mdx(id: { eq: $id }) {
            ...tipQuery
        }
    }
`;
