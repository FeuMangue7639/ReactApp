import React from 'react';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="image-container">
        <img src="./contact-bg.jpg" alt="Image d'accueil" className="full-width" />
        <div className="white-square">
          <h1 className="h1noir" id="h1margin">Me contacter</h1>
          <h3 className="h3noir" id="h3petit">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</h3>
          <hr className="blue-line" />
          <br />
          {/* Division en deux parties */}
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2noir h2margin">Formulaire de contact</h2>
              <hr className="blue-line2" />
              <form>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Nom" style={{ marginBottom: '10px' }} />
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" placeholder="Adresse Email" style={{ marginBottom: '10px' }} />
                </div>
                <div className="form-group">
                  <input type="tel" className="form-control" placeholder="Numéro de téléphone" style={{ marginBottom: '10px' }} />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Sujet" style={{ marginBottom: '10px' }} />
                </div>
                <div className="form-group">
                  <textarea className="form-control" placeholder="Message" rows="3" style={{ marginBottom: '10px' }}></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Envoyer</button>
              </form>
            </div>
            <div className="col-md-6">
              <h2 className="h2noir h2margin">Titre Droite</h2>
              <hr className="blue-line2" />
              <p>Contenu de la partie droite</p>
            </div>
          </div>
        </div> {/* Carré blanc au milieu de l'image */}
      </div>
    </div>
  );
}

export default Contact;



  
  