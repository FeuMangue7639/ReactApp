import React from 'react';

const Home = () => {
  return (
    <div>
      {/* Premier bloc */}
      <div className="first-block">
        <div className="image-container">
          <img src="./hero-bg.jpg" alt="Image d'accueil" className="full-width" />
          <div className="centered">
            <h1 className="h1grand">Bonjour, je suis John Doe</h1>
            <h2 className="h2grand">Développeur web full stack</h2>
            <button className="btn btn-primary">En savoir plus</button>
          </div>
        </div>
      </div>

      {/* Deuxième bloc */}
      <div className="second-block">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              {/* Partie de gauche */}
              <div>
                <h2 className='h2noir'>À propos</h2>
                <hr className='trait-bleu' /> {/* Trait bleu */}
                <p className='textenoir'>Texte de la partie gauche</p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Partie de droite */}
              <div>
                <img src="./john-doe-about.jpg" alt="Image" />
                <h2 className='h2noir'>Mes compétences</h2>
                <p className='textenoir'>Texte de la partie droite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
