import dotenv from "dotenv";
import type { GatsbyConfig } from "gatsby";
import path from "path";

dotenv.config({
    path: `.env.${process.env.NODE_ENV}`
});

const config: GatsbyConfig = {
    siteMetadata: {
        title: "Viktor Sokolov",
        siteUrl: process.env.ROOT_URL,
        lang: "en",
        siteLogo: "static/logo.png",
        description: "Blog about Software Enginnering",
        author: "Viktor Sokolov",
        keywords: ["Software Engineering", "Sass business", "Web development", "Python", "JavaScript"],
        social: {
            twitter: "https://twitter.com/victorysokolov",
            twitterHandle: "@victorysokolov",
            github: "https://github.com/victory-sokolov",
            devto: "https://dev.to/victorysokolov",
            linkedin: "https://www.linkedin.com/in/sokolov-viktor"
        }
    },
    plugins: [
        {
            resolve: `gatsby-plugin-react-helmet`
        },
        {
            resolve: `gatsby-plugin-feed`,
            options: {
                query: `
                    {
                        site {
                            siteMetadata {
                                title
                                description
                                siteUrl
                                site_url: siteUrl
                            }
                        }
                    }
                `,
                feeds: [
                    {
                        serialize: ({ query: { site, allMdx } }) => {
                            return allMdx.nodes.map(node => {
                                return Object.assign({}, node.frontmatter, {
                                    description: node.excerpt,
                                    date: node.frontmatter.date,
                                    url: site.siteMetadata.siteUrl + node.frontmatter.slug,
                                    guid: site.siteMetadata.siteUrl + node.frontmatter.slug,
                                    custom_elements: [{ "content:encoded": node.html }]
                                });
                            });
                        },
                        query: `
                            {
                                allMdx(
                                    sort: { order: DESC, fields: [frontmatter___date] },
                                ) {
                                nodes {
                                    excerpt
                                    html
                                    frontmatter {
                                        title
                                        date
                                        slug
                                    }
                                }
                                }
                            }
                        `,
                        output: "/rss.xml",
                        title: "Victory Sokolov Blog",
                        match: "^/blog/"
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-sitemap`,
            options: {
                query: `#graphql
                {
                    site {
                        siteMetadata {
                            siteUrl
                        }
                    }
                    allSitePage {
                        nodes {
                            path
                        }
                    }
                    allMdx(
                        sort: {fields: frontmatter___date, order: DESC},
                        filter: { frontmatter: { slug: {glob: "!*wip*"}}}) {
                        nodes {
                            frontmatter {
                                date(formatString: "YYYY-MM-DD")
                            }
                            slug
                        }
                    }
                }`
            }
        },
        {
            resolve: `gatsby-plugin-styled-components`,
            options: {
                displayName: false
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `posts`,
                path: path.resolve(`./posts`)
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `tip`,
                path: path.resolve(`./tips`)
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `pages`,
                path: path.resolve(`./src/pages`)
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: path.resolve(`./src/assets/images`)
            }
        },
        {
            resolve: `gatsby-plugin-mdx`,
            options: {
                extensions: [`.md`, `.mdx`, `.markdown`],
                gatsbyRemarkPlugins: [
                    { resolve: "gatsby-remark-copy-linked-files" },
                    {
                        resolve: "gatsby-remark-autolink-headers",
                        options: {
                            icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`
                        }
                    },
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 1200,
                            withWebp: true
                        }
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-typescript`,
            options: {
                isTSX: true,
                jsxPragma: `jsx`,
                allExtensions: true
            }
        },
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                stripMetadata: true
            }
        },
        `gatsby-plugin-image`,
        `gatsby-transformer-sharp`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Victor Sokolov Blog`,
                short_name: `Victory Blog`,
                start_url: `/`,
                background_color: `#f7f0eb`,
                theme_color: `#a2466c`,
                display: `standalone`,
                icon: `static/favicon-32x32.png`,
                icons: [
                    {
                        src: `static/android-chrome-192x192.png`,
                        sizes: `192x192`,
                        type: `image/png`
                    },
                    {
                        src: `static/android-chrome-512x512.png`,
                        sizes: `512x512`,
                        type: `image/png`
                    }
                ]
            }
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GOOGLE_TRACKING_ID],
                // This object gets passed directly to the gtag config command
                // This config will be shared across all trackingIds
                gtagConfig: {
                    optimize_id: "OPT_CONTAINER_ID",
                    anonymize_ip: true,
                    cookie_expires: 0
                },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: true,
                    respectDNT: true
                }
            }
        }
    ]
};

export default config;
