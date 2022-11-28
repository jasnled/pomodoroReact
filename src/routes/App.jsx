import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Layout from '../containers/Layout';
import Timer from '../pages/Timer';
import AppContext from '../context/AppContext';
import useInitState from '../hooks/useInitState';

const App = () => {
    const initialState = useInitState();
    

    return (
        
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Timer/>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
       
    );
};

export default App;
