import React from 'react';
import Seo from '../components/seo/index';
import { P } from '../components/mdx';
import { MDXProvider } from '@mdx-js/react';
import styled from 'styled-components';

const MarkdownWrapper = styled.div`

  a:hover {
    text-decoration: underline;
  }

  ul {
    padding-left: 30px;
  }
`

const MarkdownPage = ({ pageContext, children }) => {

  return (
    <>
      <Seo />
      <MDXProvider components={{ p: P }}>
        <MarkdownWrapper>
          {children}
        </MarkdownWrapper>
      </MDXProvider>
    </>
  )
}

export default MarkdownPage;