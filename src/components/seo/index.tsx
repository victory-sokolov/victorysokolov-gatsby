import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Helmet } from 'react-helmet';

type SeoType = {
  title?: string
  description?: string
  keywords?: string[]
  slug?: string
  ogImage?: object
}

export default function Seo({ title, description, slug, ogImage, keywords }: SeoType) {
  const isBlogPost = slug?.includes("/blog") ? true : false;

  const {
    site: { siteMetadata: meta },
  } = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
          lang
          favicon {
            ico
            sm
            lg
          }
          social {
            twitterHandle
          }
        }
      }
    }
  `)

  const ogImgSrc = `${meta.siteUrl}${ogImage?.images?.fallback?.src}`

  return (
    <Helmet>
      <title>{`${meta.title} | ${title}`}</title>
      <meta name="title" content={title || meta.title} />
      <meta name="description" content={description || meta.description} />
      <meta name="author" content={meta.author} />
      <meta name="keywords" content={keywords || meta.keywords.join(", ")} />
      <meta name="image" content={`${ogImgSrc}`} />
      <link rel="canonical" href={`${meta.siteUrl}/${slug}`} />
      <link rel="icon" type="image/png" sizes="16x16" href={meta.favicon.ico} />
      <link rel="icon" type="image/png" sizes="16x16" href={meta.favicon.sm} />
      <link rel="icon" type="image/png" sizes="32x32" href={meta.favicon.sm} />

      {/* OpenGraph tags */}
      <meta name="image:alt" content={title || meta.title} />
      <meta property="og:title" content={title || meta.title} />
      <meta property="og:url" content={`${meta.siteUrl}/${slug}`} />
      <meta property="og:image" content={ogImgSrc} />
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card tags */}
      <meta name="twitter:site" content={meta.social.twitterHandle} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={`${meta.siteUrl}/${slug}`} />
      <meta property="twitter:title" content={title || meta.title} />
      <meta
        property="twitter:description"
        content={description || meta.description}
      />
      <meta property="twitter:image" content={ogImgSrc} />
      <meta name="twitter:creator" content={meta.twitterHandle} />
      <meta name="twitter:site" content={meta.twitterHandle} />

      {/* Facebook */}
      <meta property="og:type" content={isBlogPost ? "article" : "website"} />
      <meta property="og:title" content={title || meta.title} />
      <meta property="og:url" content={`${meta.siteUrl}/${slug}`} />
      <meta
        property="og:description"
        content={description || meta.description}
      />
      <meta property="og:image" content={ogImgSrc} />
      <meta property="og:image:alt" content={title || meta.title}></meta>
    </Helmet>
  )
}