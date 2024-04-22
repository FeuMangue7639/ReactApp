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

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';



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
        <strong>John Doe</strong>
        <ul>
          <li>40 Rue Laure Diebold</li>
          <li>69009 Lyon, France</li>
          <li>Téléphone : 06 20 30 40 50</li>
          <br/>
          {/* Liste d'icônes sans puce */}
          <li style={{ listStyleType: 'none' }}>
            <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
            </a>
            <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '24px', color: 'black', marginRight: '10px' }} />
            </a>
            <a href="https://api.github.com/users/github-john-doe" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '24px', color: 'black' }} />
            </a>
          </li>
        </ul>
      </div>
      <div className="col-md-3">
        <strong>Liens utiles</strong>
        <ul>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/service">Service</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/mentions-legales">Mentions légales</Link></li>
        </ul>
      </div>
      <div className="col-md-3">
        <strong>Mes dernières réalisations</strong>
        <ul>
          <li>Fresh food</li>
          <li>Restaurant Akira</li>
          <li>Espace bien-être</li>
        </ul>
      </div>
      <div className="col-md-3">
        <strong>Mes derniers articles</strong>
        <ul>
          <li>Coder son site en HTML/CSS</li>
          <li>Vendre ses produits sur le web</li>
          <li>Se positionner sur Google</li>
        </ul>
      </div>
    </div>
  </div>
</footer>

    </div>
  );
}
