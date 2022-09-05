import { Buffer } from "buffer";
import dotenv from "dotenv";
import { fileTypeFromBuffer } from "file-type";
import * as fs from "fs";
import fetch from "node-fetch";
import { TwitterApi } from "twitter-api-v2";

dotenv.config({ path: "../../.env.production" });

const removeCharacters = text => {
    if (text) {
        return text.replace(/[^\p{L}\p{N}\p{P}\p{Z}^$\n]|#|\./gu, "").replace(/(?:https?|ftp):\/\/[\n\S]+/g, "");
    }
};

async function getTweets(username) {
    const startTime = new Date(new Date().setUTCHours(0, 0, 0, 0));
    const endTime = new Date(new Date().setUTCHours(23, 59, 59, 999));

    const client = new TwitterApi(process.env.TWITTER_TOKEN);
    const timeline = await client.v2.userTimeline(process.env.TWITTER_TIMELINE_ID, {
        "tweet.fields": ["id", "created_at", "attachments", "entities", "text"],
        "media.fields": ["url", "alt_text", "media_key"],
        exclude: ["replies", "retweets"],
        expansions: ["attachments.media_keys"]
        // start_time: startTime.toISOString(),
        // end_time: endTime.toISOString()
    });
    const tweetData = [];

    for await (const tweet of timeline) {
        const mediasOfTweet = timeline.includes.medias(tweet);
        const tweetDate = new Date(tweet.created_at);
        if (tweet.text.startsWith("💡")) {
            const medias = mediasOfTweet.at(0);
            const code = medias?.alt_text;

            if (code) {
                const tipText = removeCharacters(tweet.text);
                const tweetObj = {
                    title: tipText.split("\n")[0],
                    url: `https://twitter.com/${username}/status/${tweet.id}`,
                    created_at: tweetDate.toISOString(),
                    text: tipText,
                    hashTags: tweet.entities.hashtags.map(({ tag }) => tag),
                    altText: code,
                    image: medias.url
                };
                tweetData.push(tweetObj);
            }
        }
    }

    return tweetData;
}

async function downloadTweetImage(url, path, slug) {
    console.info(`Downloading image ${url}...`);
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const fileType = await fileTypeFromBuffer(buffer);
    const outputFileName = `${path}/${slug}.${fileType.ext}`;
    fs.createWriteStream(outputFileName).write(buffer);
}

async function renderTips() {
    const tweets = await getTweets("victorysokolov");

    for (const tweet of tweets) {
        // Create tip directory
        const description = tweet.text.replace("\n", " ");
        const slug = removeCharacters(tweet.title).toLowerCase().trim().replace(/ /g, "-");
        const tipDir = `../../tips/${slug}`;
        const imgName = `${slug}.jpg`;

        if (!fs.existsSync(tipDir)) {
            fs.mkdirSync(tipDir, err => {
                if (err) {
                    throw err;
                }
                console.info(`Directory ${tipDir} is created.`);
            });
        }

        let content = `---
tweetUrl: ${tweet.url}
title: ${tweet.title.trim()}
description: "${description}"
slug: ${slug}
date: ${tweet.created_at}
featureImage: ${imgName}
tags: ${tweet.hashTags.join(",")}
---`;
        content += "\n```" + tweet.hashTags[0].toLowerCase() + "\n" + tweet.altText + "\n```";

        fs.writeFileSync(
            `${tipDir}/${slug}.mdx`,
            content,
            {
                encoding: "utf-8"
            },
            err => {
                if (err) {
                    console.error(err);
                    return;
                }
            }
        );
        await downloadTweetImage(tweet.image, tipDir, slug);
        console.info("----------------------------------------------------");
    }
}

renderTips();
