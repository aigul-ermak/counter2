import React from 'react';
import './App.css';
import {TabloInput} from './components/TabloInput/TabloInput';
import {TabloResult} from './components/TabloResult/TabloResult';


function App() {
    return (
        <div className="App">
            <TabloInput/>
            <TabloResult/>
        </div>
    );
}

export default App;
