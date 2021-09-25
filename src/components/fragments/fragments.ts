import { graphql } from "gatsby"

export const postQuery = graphql`
  fragment postQuery on Mdx {
    frontmatter {
      date(formatString: "MMMM DD, YYYY")
      slug
      title
      description
      tags
      status
    }
  }
`
export const imageQuery = graphql`
  fragment imageQuery on File {
    childImageSharp {
      gatsbyImageData(width: $width, placeholder: BLURRED)
    }
  }
`
