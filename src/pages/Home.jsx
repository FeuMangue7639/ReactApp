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
              <div className="skills-container" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
                <h2 className='h2noir'>À propos</h2>
                <hr className='trait-bleu' /> {/* Trait bleu */}
                <p className='textenoir' style={{ fontSize: '20px', textAlign: 'left' }}>Passionné par l'informatique et les nouvelles technologies, j'ai suivi une formation d'<strong>intégrateur-développeur web</strong> au CEF. Au cours de cette formation, j'ai pu acquérir des bases solides pour travailler dans le domaine du <strong>développement web</strong>.</p>
                <p className='textenoir' style={{ fontSize: '20px', textAlign: 'left' }}>Basé à Lyon, je suis en recherche d'une alternance au sein d'une agence digitale pour consolider ma formation de <strong>développeur web full stack</strong>.</p>
                <p className='textenoir' style={{ fontSize: '20px', textAlign: 'left' }}>J'accorde une attention particulière à la qualité du code que j'écris et je respecte les bonnes pratiques du web.</p>
              </div>
            </div>
            <div className="col-md-6">
              {/* Partie de droite */}
              <div className="skills-container" style={{ boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', border: '1px solid #ccc', borderRadius: '5px', padding: '20px' }}>
                <img src="./john-doe-about.jpg" alt="Image" style={{ width: '500px' }}/>
                <h2 className='h2noir'>Mes compétences</h2>
                <div className="container">
                  <div>
                    <h3 className='h3noir' style={{ fontSize: '14px', textAlign: 'left' }}>React</h3>
                    <div className="progress">
                      <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h3 className='h3noir' style={{ fontSize: '14px', textAlign: 'left' }}>JavaScript</h3>
                    <div className="progress">
                      <div className="progress-bar bg-info" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h3 className='h3noir' style={{ fontSize: '14px', textAlign: 'left' }}>CSS</h3>
                    <div className="progress">
                      <div className="progress-bar bg-warning" role="progressbar" style={{ width: '75%' }} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                  <br />
                  <div>
                    <h3 className='h3noir' style={{ fontSize: '14px', textAlign: 'left' }}>HTML</h3>
                    <div className="progress">
                      <div className="progress-bar bg-danger" role="progressbar" style={{ width: '100%' }} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
