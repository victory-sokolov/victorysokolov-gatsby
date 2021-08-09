import { graphql } from "gatsby"

export const postQuery = graphql`
  fragment postQuery on Mdx {
    id
    excerpt(pruneLength: 120)
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      featureImage {
        childImageSharp {
          gatsbyImageData(width: 350, placeholder: BLURRED)
        }
      }
    }
  }
`
