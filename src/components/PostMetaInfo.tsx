import React from "react";
import { FaRegCalendarCheck, FaRegClock } from "react-icons/fa";
import styled from "styled-components/macro";

type PostMetaInfo = {
    date: string;
    readTime: string;
    children?: React.ReactNode;
};

export const MetaPostWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.5rem;
    font-weight: 500;
    font-size: 1.4rem;
    padding: 0.5rem 0;

    svg {
        margin-right: 1rem;
        font-size: 1.8rem;
    }

    span:not(:first-child) {
        margin-left: 0.5rem;
    }

    time:not(:first-child) {
        padding-left: 1rem;
    }
`;

export const PostMeta: React.FC<PostMetaInfo> = ({ date, readTime, children }) => {
    return (
        <MetaPostWrapper>
            <time dateTime={date} itemProp="datePublished">
                <FaRegCalendarCheck />
                {date}
            </time>
            {readTime && (
                <span>
                    <FaRegClock />
                    {readTime}
                </span>
            )}
            {children}
        </MetaPostWrapper>
    );
};
