import React from 'react';
import './main.scss'
import {Route, Routes} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ArticlePage from "./Pages/ArticlePage";



const App = () => {

    return (
        <div className="app">
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/Article/:id' element={<ArticlePage />}/>
            </Routes>
        </div>

    );
}

export default App;
