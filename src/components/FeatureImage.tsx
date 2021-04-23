import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

export const FeatureImage = ({ image, styles }: any) => {
  const { file } = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "image-not-available.png" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, width: 320, placeholder: BLURRED)
        }
      }
    }
  `)

  return <GatsbyImage image={image} style={styles} alt="" />
}
