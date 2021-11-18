import { GatsbyImageProps } from "gatsby-plugin-image"

export type INode<T> = {
  node: T
}

export type QueryResult<T> = {
  allMdx: {
    edges: {
      node: T
    }[]
  }
}
export type PageContext = {
  limit: number
  skip: number
  numPages: number
  currentPage: number
}

export type GatsbyProps = {
  data: {
    post: {
      edges: Post[]
    }
  }
  pageContext: PageContext
}

export type featureImage = {
  childImageSharp: GatsbyImageProps
}

export type PostFrontMatter = {
  date: string
  slug: string
  title: string
  description: string
  tags: string[]
  status: string
  image: featureImage
}

export type Post = {
  body: string
  id: string
  excerpt: string
  frontmatter: PostFrontMatter
}
