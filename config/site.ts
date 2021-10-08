interface SiteConfig {
  title: string
  siteUrl: string | undefined
  lang: string
  siteLogo: string
  description: string
  author: string
  keywords: string[]
  favicon: { [key in string]: string }
  // Social medias
  social: Social
  postsPerPage: number
}

interface Social {
    twitter: string
    twitterHandle: string
    github: string
    linkedin: string
    instagram: string
    youtube: string
    rss: string
}

const site: SiteConfig = {
  title: "Viktor Sokolov",
  siteUrl: process.env.ROOT_URL,
  lang: "en",
  siteLogo: "images/logo.png",
  description: "Blog about Software Enginnering",
  author: "Viktor Sokolov",
  keywords: [
    "Software Engineering",
    "Sass business",
    "Web development",
    "Python",
    "JavaScript",
  ],
  favicon: {
    ico: "favicon.ico",
    sm: "favicon-16x16.png",
    lg: "favicon-32x32.png",
  },
  // Social medias
  social: {
    twitter: "https://twitter.com/victorysokolov",
    twitterHandle: "@victorysokolov",
    github: "https://github.com/victory-sokolov",
    linkedin: "https://www.linkedin.com/in/sokolov-viktor",
    instagram: "",
    youtube: "",
    rss: "",
  }
}

export default site
