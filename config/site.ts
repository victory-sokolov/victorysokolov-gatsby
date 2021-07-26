interface SiteConfig {
    title: string;
    siteUrl: string | undefined;
    lang: string;
    pathPrefix: string;
    /* path to logo image */
    siteLogo: string;
    description: string;
    author: string;

    /* Twitter og */
    userTwitter: string;
    ogLanguage: string;

    /* Social medias links */
    twitter: string;
    twitterHandle: string;
    github: string;
    linkedin: string;
    instagram: string;
    youtube: string;
    rss: string;
}

const site: SiteConfig = {
    title: 'Viktor Sokolov | Personal blog',
    siteUrl: process.env.ROOT_URL,
    lang: 'en',
    pathPrefix: '/',
    siteLogo: 'images/logo.png',
    description: 'Tutorials about TypeScript, React, Angular, Python and business bootstraping.',
    author: 'Viktor Sokolov',

    userTwitter: '@victorysokolov', // Twitter Username
    ogLanguage: 'en_US',

    // Manifest and Progress color
    // themeColor: '#4147DC',
    // backgroundColor: '#231C42',

    // Social medias
    twitter: 'https://twitter.com/victorysokolov',
    twitterHandle: '@victorysokolov',
    github: 'https://github.com/victory-sokolov',
    linkedin: 'https://www.linkedin.com/in/sokolov-viktor',
    instagram: '',
    youtube: '',
    rss: ''
}

export default site;