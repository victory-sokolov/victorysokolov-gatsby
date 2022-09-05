import type { GatsbyNode } from "gatsby";
import path from "path";

export const createPages: GatsbyNode["createPages"] = async ({ actions, graphql }) => {
    await Promise.all([createTipPage({ graphql, actions }), createPostPage({ graphql, actions })]);
};

async function createPostPage({ graphql, actions }) {
    const pageTemplate = path.resolve("./src/templates/post.tsx");

    const result = await graphql(`
        query posts {
            allMdx(
                sort: { fields: frontmatter___date, order: DESC }
                filter: { frontmatter: { published: { eq: true } } }
            ) {
                nodes {
                    id
                    frontmatter {
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw new Error(result.errors);
    }

    // Create paginated pages for posts
    const postPerPage = Number(process.env.GATSBY_PAGE_SIZE);
    const numPages = Math.ceil(result.data.allMdx.nodes.length / postPerPage);
    for (let index = 1; index <= numPages; index++) {
        actions.createPage({
            path: index === 0 ? "/blog/" : `/blog/${index + 1}`,
            component: path.resolve(`./src/pages/blog.tsx`),
            context: {
                limit: postPerPage,
                skip: index * postPerPage,
                numPages,
                currentPage: index + 1
            }
        });
    }

    // Create single blog post
    const posts = result.data.allMdx.nodes;
    posts.forEach((node, index: number) => {
        const slug: string = node.frontmatter.slug;
        const id: string = node.id;
        if (slug) {
            actions.createPage({
                path: `/blog/${slug}`,
                component: `${pageTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
                context: {
                    id,
                    prev: index === 0 ? null : posts[index - 1].node,
                    next: index === posts.length - 1 ? null : posts[index + 1].node
                }
            });
        }
    });
}

async function createTipPage({ graphql, actions }) {
    const tipTemplate = path.resolve("./src/templates/tip.tsx");
    const { errors, data } = await graphql(`
        query tips {
            allMdx(
                filter: { internal: { contentFilePath: { regex: "//tips//" } } }
                sort: { fields: [frontmatter___date], order: DESC }
            ) {
                nodes {
                    frontmatter {
                        slug
                    }
                    internal {
                        contentFilePath
                    }
                    id
                }
            }
        }
    `);

    if (errors) {
        console.error(errors);
        throw new Error("There was an error");
    }

    const tips = data.allMdx.nodes;

    tips.forEach((node, index: number) => {
        const slug = node.frontmatter.slug;
        actions.createPage({
            path: `/tips/${slug}`,
            component: `${tipTemplate}`,
            context: {
                id: node.id,
                slug: slug,
                prev: index === 0 ? null : tips[index - 1].node,
                next: index === tips.length - 1 ? null : tips[index + 1].node
            }
        });
    });
}
