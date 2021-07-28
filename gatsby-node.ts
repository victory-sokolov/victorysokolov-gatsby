const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

const createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const result = await graphql(`
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
  console.log(result.data.allMdx.edges)
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Create paginated pages for posts
  const postPerPage = 12
  const numPages = Math.ceil(result.data.allMdx.edges.length / postPerPage)

  Array.from({ length: numPages }).map((_, index) => {
    createPage({
      path: index === 0 ? "/blog" : `/${index + 1}`,
      component: path.resolve("./src/pages/blog.tsx"),
      context: {
        limit: postPerPage,
        skip: index * postPerPage,
        numPages,
        currentPage: index + 1,
      },
    })
  })

  // Create single blog post
  result.data.allMdx.edges.map(edge => {
    const slug = edge.node.frontmatter.slug
    const id = edge.node.id
    createPage({
      path: "/blog/" + slug,
      component: require.resolve("./src/templates/post.tsx"),
      context: { id },
    })
  })
}

module.exports = {
  createPages,
}
