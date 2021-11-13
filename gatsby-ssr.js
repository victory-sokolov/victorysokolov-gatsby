import { wrapRootElement as wrapper } from "./wrapRootElement";
import React from 'react';

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
    document.documentElement.dataset.theme = 'light'
  }
})();
`
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    React.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: applyDarkModeFunc
      }
    })
  ])
}

export const wrapPageElement = wrapper
