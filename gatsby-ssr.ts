import { GatsbySSR } from "gatsby";
import React from "react";

import { wrapRootElement as wrapper } from "./wrapRootElement";

const applyDarkModeFunc = `
    (function() {
        const mode = localStorage.getItem('theme');
        if (mode !== null && ['light', 'dark'].includes(mode)) {
            document.documentElement.dataset.theme = mode;
            return;
        }
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        const hasMediaQueryPreference = typeof mql.matches === 'boolean';
        if (hasMediaQueryPreference && mql.matches === true) {
            document.documentElement.dataset.theme = 'dark';
        } else {
            document.documentElement.dataset.theme = 'light';
        }
    })();
`;

export const onRenderBody = ({ setHeadComponents }) => {
    setHeadComponents([
        React.createElement("script", {
            dangerouslySetInnerHTML: {
                __html: applyDarkModeFunc.replace(/\n/g, " ").replace(/ {2}/g, "")
            }
        })
    ]);
};

export const wrapPageElement: GatsbySSR["wrapPageElement"] = wrapper;
