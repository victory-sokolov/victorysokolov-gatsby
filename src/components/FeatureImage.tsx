import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

export const FeatureImage = ({ image, alt, style }: any) => {
  // const { file } = useStaticQuery(graphql`
  //   query {
  //     file {
  //       childImageSharp {
  //         gatsbyImageData(layout: FIXED, width: 320, height: 350, placeholder: BLURRED)
  //       }
  //     }
  //   }
  // `)

  return <GatsbyImage image={getImage(image)} style={style} alt={alt} />
}
