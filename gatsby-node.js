exports.createPages = async function({actions, graphql}) {
    const { data } = await graphql`
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
    `

    // Create paginated pages for posts
    const postPerPage = 2;
    const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

    Array.from({ length: numPages}).map((_, index) => {
        actions.createPages({
            path: (index == 0) ? '/' : `/${i + 1}`,
            component: require.resolve("./src/templates/allPosts.tsx"),
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                numPages,
                currentPage: i + 1,
            }
        })
    });

    // Create single blog post
    data.allMdx.edges.map(edge => {
        const slug = edge.node.frontMatter.slug;
        const id = edge.node.id;
        actions.createPages({
            path: slug,
            component: require.resolve("./src/templates/post.tsx"),
            context: {id},
        })
    });
}