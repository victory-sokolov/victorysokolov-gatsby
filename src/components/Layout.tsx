import React from 'react';
import GlobalStyles from '../assets/styles/GlobalStyles';
import "normalize.css";

const Layout = ({children}) => {
    return (
      <>
        <GlobalStyles />
        <div>
            {children}
        </div>
      </>
    )
}

export default Layout;