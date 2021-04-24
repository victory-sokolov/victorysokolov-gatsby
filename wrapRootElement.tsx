import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import React from 'react';
import Layout from './src/components/Layout';
import { Code } from './src/components/mdx';
import "./src/components/mdx/language-tabs.css";

const components = {
    pre: preProps => {
        const props = preToCodeBlock(preProps);
        if (props) {
            return <Code { ...props } />
        }
        return <pre { ...preProps } />
    },
    wrapper: ({ children }) => <>{ children } </>
};

export const wrapPageElement = ({ element, props }) => {
    return (
        <MDXProvider components= { components } >
        <Layout {...props } >
            {element}
        </Layout>
        </MDXProvider>
    )
}

