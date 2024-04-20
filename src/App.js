import './App.css';
import './style.css';
import React from 'react';
import { Route, Routes, Link } from 'react-router-dom'; // Pas besoin de BrowserRouter ici

import Home from './pages/Home';
import Contact from './pages/Contact';
import Service from './pages/Service';
import Realisations from './pages/Realisations';
import Blog from './pages/Blog';
import NavigationBar from './components/NavigationBar';
import MentionsLegales from './pages/MentionsLegales'; // Assurez-vous de fournir le bon chemin vers votre fichier MentionsLegales.jsx


export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavigationBar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/realisations" element={<Realisations />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/service" element={<Service />} />
          <Route path="/mentions-legales" element={<MentionsLegales />} /> {/* Ajoutez cette route pour les mentions légales */}
        </Routes>
      </header>

      <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <strong>Bloc 1</strong>
            <ul>
              <li>Chat</li>
              <li>Chien</li>
              <li>Oiseau</li>
              <li>Lapin</li>
              <li>Poisson</li>
            </ul>
          </div>
          <div className="col-md-3">
            <strong>Bloc 2</strong>
            <ul>
              <li><Link to="/home">Accueil</Link></li>
              <li><Link to="/service">Service</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/mentions-legales">Mentions légales</Link></li>
            </ul>
          </div>
          <div className="col-md-3">
            <strong>Bloc 3</strong>
            <ul>
              <li>Vélo</li>
              <li>Voiture</li>
              <li>Moto</li>
              <li>Bus</li>
              <li>Train</li>
            </ul>
          </div>
          <div className="col-md-3">
            <strong>Bloc 4</strong>
            <ul>
              <li>Montagne</li>
              <li>Plage</li>
              <li>Forêt</li>
              <li>Désert</li>
              <li>Prairie</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  );
}
