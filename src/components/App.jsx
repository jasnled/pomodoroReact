import React from 'react';
import Layout from '../containers/Layout';
import Timer from '../pages/Timer';
import AppContext from '../context/AppContext';
import useInitState from '../hooks/useInitState';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
    const initialState = useInitState();
    return (
        
        <AppContext.Provider value={initialState}>
            <BrowserRouter>
                <Layout>
                    <Routes>                    
                        
                            <Route path = "/" element = {<Timer/>}/>
                            <Route path = "/report" element = {<Timer/>}/>
                        
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AppContext.Provider>
       
    );
};

export default App;
