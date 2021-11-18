import path from "path"
import { GatsbyNode } from "gatsby"
import { QueryResult, Post, PostFrontMatter } from "./src/types"

type Page = Pick<Post, "id"> & {
  frontmatter: Pick<PostFrontMatter, "slug" | "status">
}

export const createPages: GatsbyNode["createPages"] = async ({
  actions,
  graphql
}) => {
  const { createPage } = actions

  const result = await graphql<QueryResult<Page>>(`
    query {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  // Create paginated pages for posts
  const postPerPage: number = Number(process.env.GATSBY_PAGE_SIZE)
  const numPages = Math.ceil(result.data!.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).map((_, index: number) => {
    createPage({
      path: index === 0 ? "/blog/" : `/blog/${index + 1}`,
      component: path.resolve("./src/pages/blog.tsx"),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1
      }
    })
  })

  // Create single blog post
  result.data!.allMdx.edges.map(edge => {
    const slug: string = edge.node.frontmatter.slug
    const id: string = edge.node.id

    if (slug) {
      createPage({
        path: `/blog/${slug}`,
        component: require.resolve("./src/templates/post.tsx"),
        context: { id }
      })
    }
  })
}
