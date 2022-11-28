import React, { useContext } from 'react';
import Header from '../containers/Header';
import Report from '../pages/Report';
import AppContext from '../context/AppContext';


const Layout = ({children}) => {
    const {toggle} = useContext(AppContext);

    return (
        <div className = "Layout">
            <Header/>
            { toggle && <Report /> }
            {children}
        </div>
    );
}

export default Layout;
