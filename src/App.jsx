import React from 'react';
import './styles/app.scss'

import Home from "./sections/Home";
import Skills from "./sections/Skills";
import Experience from "./sections/Experience";
import Work from "./sections/Work";
import Design from "./sections/Design";

const App = () => {
    return (
        <div className='app'>
            <Home />
            <Skills />
            <Experience />
            <Work />
            <Design/>
        </div>
    );
};

export default App;