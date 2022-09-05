import { graphql } from "gatsby";

export const postFragment = graphql`
    fragment PostFrontmatter on MdxFrontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
        published
        featureImage {
            ...imageQuery
        }
    }

    fragment Post on Mdx {
        id
        excerpt(pruneLength: 120)
        frontmatter {
            ...PostFrontmatter
        }
    }
`;

export const postQuery = graphql`
    fragment postQuery on Mdx {
        id
        excerpt(pruneLength: 120)
        tableOfContents
        frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
            description
            tags
            published
        }
    }
`;

export const tipQuery = graphql`
    fragment tipQuery on Mdx {
        id
        body
        excerpt(pruneLength: 100)
        frontmatter {
            title
            description
            slug
            date(formatString: "MMMM DD, YYYY")
            tags
            tweetUrl
            featureImage {
                ...imageQuery
            }
        }
    }
`;

export const imageQuery = graphql`
    fragment imageQuery on File {
        childImageSharp {
            gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
    }
`;
