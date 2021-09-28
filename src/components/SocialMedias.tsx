import React from "react"
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa"
import styled from "styled-components"
import site from "../../config/site"

const SocialMedias = styled.div`
  li {
    display: inline-block;
    padding: 0 10px;
  }

  li:hover {
    filter: brightness(50%);
  }
`

export default function SocialMedia({ color }: any) {
  return (
    <SocialMedias>
      <ul>
        <li>
          <a
            href={site.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter color={color} />
          </a>
        </li>
        <li>
          <a
            href={site.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin color={color} />
          </a>
        </li>
        <li>
          <a href={site.social.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram color={color} />
          </a>
        </li>
      </ul>
    </SocialMedias>
  )
}
