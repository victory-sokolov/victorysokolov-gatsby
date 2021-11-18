import { GatsbyImage, getImage, ImageDataLike } from "gatsby-plugin-image"
import React from "react"

type IFeatureImage = {
  image: ImageDataLike
  alt: string
  style: any
}

export const FeatureImage: React.FC<IFeatureImage> = ({ image, alt, style }) => {
  return <GatsbyImage image={getImage(image)} style={style} alt={alt} />
}
