export const getGithubUrl = (slug: string): string =>
    `https://github.com/victory-sokolov/victory-sokolov/tree/master/posts/${slug}index.mdx`;

export const slugify = (title: string): string => {
    return title.toLowerCase().replace(" ", "-");
};
