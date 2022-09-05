export const useReadTime = (text: string) => {
    if (!text) return;

    const WPM = 250;
    const textLength = text.trim().split(/\s+/).length;
    const readTime = Math.ceil(textLength / WPM).toString();
    return `${readTime} min read`;
};
