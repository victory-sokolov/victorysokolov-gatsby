import { graphql, useStaticQuery } from 'gatsby';
import React from "react"
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa"
import styled from "styled-components"

const SocialMedias = styled.div`
  li {
    display: inline-block;
    padding: 0 1rem;
  }

  li:hover {
    filter: brightness(50%);
  }
`

const SocialMedia: React.FC<{color: string}> = ({ color }) => {

    const {
      site: { siteMetadata: meta },
    } = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            social {
              twitter
              linkedin
              github
            }
          }
        }
      }
    `)
  return (
    <SocialMedias>
      <ul>
        <li>
          <a
            href={meta.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color={color} size={22}/>
          </a>
        </li>
        <li>
          <a
            href={meta.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color={color} size={22}/>
          </a>
        </li>
        <li>
          <a
            href={meta.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub color={color} size={22}/>
          </a>
        </li>
      </ul>
    </SocialMedias>
  )
}

export default SocialMedia;