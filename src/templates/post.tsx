import { MDXProvider } from "@mdx-js/react";
import { Link, graphql } from "gatsby";
import React from "react";
import { FaDev, FaGithub } from "react-icons/fa";
import { helmetJsonLdProp } from "react-schemaorg";
import { GatsbyProps } from "src/common/types";
import styled from "styled-components/macro";



import { getGithubUrl } from "../common/utils";
import Categories from "../components/Categories";
import Comments from "../components/Comments";
import { FeatureImage } from "../components/FeatureImage";
import { PostMeta } from "../components/PostMetaInfo";
import { P } from "../components/mdx";
import Seo from "../components/seo";
import { useReadTime } from "../hooks/useReadTime";


const BlogWrapper = styled.div`
    max-width: 80rem;
`;

const ContentWrapper = styled.article`
    margin: 0 auto;
    padding: 2rem 0 5rem;
    position: relative;

    @media ${props => props.theme.t.breakpoints.mobile} {
        padding: 0;
        background: none;
        box-shadow: none;
        max-width: 100%;
        position: relative;
        bottom: 0;
    }
`;

const IconWrapper = styled.div`
    color: var(--link-color);
    &:hover {
        color: var(--mode);
    }
`;

const GithubLink = ({ slug }: { slug: string }) => (
    <a href={getGithubUrl(slug)} aria-labelledby="Edit this post" target="_blank" rel="noopener noreferrer">
        <IconWrapper>
            <FaGithub />
            <span>Edit this post</span>
        </IconWrapper>
    </a>
);

const DevToLink = () => (
    <a href="#" aria-labelledby="Read on DevTo" target="_blank">
        <IconWrapper>
            <FaDev size={18} />
            <span>Read on DevTo</span>
        </IconWrapper>
    </a>
);

export const NextPreviousItem = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 2rem;

    .next-item,
    .previous-item {
        border: 2px solid rgb(31, 34, 51);
        border-radius: 8px;
        padding: 1rem;
        width: 30rem;
    }
`;

const SinglePost: React.FC<GatsbyProps> = ({ data, pageContext, children }) => {

    if (!data) {
        return <h1>Post not found</h1>;
    }

    const post = data.post.frontmatter;
    const featureImage = post.featureImage.childImageSharp.gatsbyImageData;
    const date = post.date;
    const article = data.post.body;
    const title = post.title;
    const readTime = useReadTime(article);
    const tags = post.tags.split(",");
    const { next, prev } = pageContext;

    const components = {
        p: P
    };

    const jsonLd = helmetJsonLdProp({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: title,
        datePublished: date,
        dateModified: "",
        author: [
            {
                "@type": "Person",
                name: "Viktor Sokolov",
            }
        ]
    });

    return (
        <>
            <BlogWrapper>
                <Seo
                    title={post.title}
                    description={post.description}
                    slug={post.slug}
                    ogImage={featureImage}
                    keywords={tags}
                    script={jsonLd}
                />
                <FeatureImage
                    image={featureImage}
                    alt={post.title}
                    style={{ height: "35rem", paddingBottom: "1rem" }}
                />
                <ContentWrapper>
                    <h1 itemProp="headline">{title}</h1>
                    <PostMeta date={date} readTime={readTime} style={{ gap: "1rem" }}>
                        <GithubLink slug={post.slug} />
                        <DevToLink />
                    </PostMeta>
                    <Categories style={{ marginBottom: "6rem" }} categories={tags} />
                    <MDXProvider components={components}>{children}</MDXProvider>
                    <NextPreviousItem>
                        {prev && (
                            <div className="previous-item">
                                <p>⇠ Previous post</p>
                                <Link to={`/blog/${prev.frontmatter.slug}`}>{prev.frontmatter.title}</Link>
                            </div>
                        )}

                        {next && (
                            <div className="next-item">
                                <p>Next post ⇢</p>
                                <Link to={`/blog/${next.frontmatter.slug}`}>{next.frontmatter.title}</Link>
                            </div>
                        )}
                    </NextPreviousItem>
                </ContentWrapper>
                <Comments />
            </BlogWrapper>
        </>
    );
};

export default SinglePost;

export const pageQuery = graphql`
    query ($id: String!) {
        post: mdx(id: { eq: $id }) {
            ...postQuery
            frontmatter {
                featureImage {
                    ...imageQuery
                }
            }
        }
    }
`;
