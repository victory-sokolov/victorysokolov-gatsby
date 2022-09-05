import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { FaDev, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import styled from "styled-components/macro";

const SocialMedias = styled.div`
    li {
        display: inline-block;
        padding: 0 1rem;
    }

    li:hover {
        filter: brightness(50%);
    }
`;

const SocialMedia: React.FC<{ color: string }> = ({ color }) => {
    const {
        site: { siteMetadata: meta }
    } = useStaticQuery(graphql`
        query meta {
            site {
                siteMetadata {
                    social {
                        twitter
                        linkedin
                        github
                        devto
                    }
                }
            }
        }
    `);

    return (
        <SocialMedias>
            <ul>
                <li>
                    <a href={meta.social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <FaTwitter color={color} size={22} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <FaLinkedin color={color} size={22} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <FaGithub color={color} size={22} />
                    </a>
                </li>
                <li>
                    <a href={meta.social.devto} target="_blank" rel="noopener noreferrer" aria-label="Devto">
                        <FaDev color={color} size={22} />
                    </a>
                </li>
            </ul>
        </SocialMedias>
    );
};

export default SocialMedia;
