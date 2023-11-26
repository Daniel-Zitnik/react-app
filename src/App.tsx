import React from 'react';
import './assets/App.scss';
import { Route, NavLink, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/tunes">Tunes</NavLink>
        <NavLink to="/about">About</NavLink>
      </header>

      <main>
        <Routes>
          <Route path='/' />
          <Route path='/tunes' />
          <Route path='/about' />
        </Routes>
      </main>

      <footer>

      </footer>
    </div>
  );
}

export default App;
