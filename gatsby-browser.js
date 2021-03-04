import React from 'react';
import Layout from './src/components/Layout';
import Nav from './src/components/Nav';


export const wrapPageElement = ({ element, props}) => {
    return (
        <Layout {...props}>
            <Nav />
            {element}
        </Layout>
    )
}