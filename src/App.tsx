// react
import React from 'react';
import { Route, NavLink, Routes } from 'react-router-dom';
// assets
import './assets/App.scss';
// pages
import Home from './pages/Home';
import Tunes from './pages/Tunes';
import About from './pages/About';

function App() {
    return (
        <div className="App">
            <header>
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/tunes">Tunes</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>

            <main>
                <Routes>
                    <Route path='/' Component={Home} />
                    <Route path='/tunes' Component={Tunes} />
                    <Route path='/about' Component={About} />
                </Routes>
            </main>

            <footer>

            </footer>
        </div>
    );
}

export default App;
