

import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';







export default function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Découvrons ensemble la librairie React !</h1>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h3>Ma TODO list</h3>
        <nav>
        <Link to='/'>Accueil</Link>
        <Link to='/contact'>Contact</Link>
        </nav>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
      </header>
    </div>
  );
}


