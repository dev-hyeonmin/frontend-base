import React from 'react';
import Header from './components/Header';
import RouteComponent from './router';
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Header />
            <BrowserRouter>
                <RouteComponent />
            </BrowserRouter>
        </div>
    );
}

export default App;
