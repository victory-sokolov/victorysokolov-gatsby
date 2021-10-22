import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

type IFeatureImage = {
  image: string
  alt: string
  style: any
}

export const FeatureImage: React.FC<IFeatureImage> = ({ image, alt, style }) => {
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
