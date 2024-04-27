import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

const Contact = () => {

  return (
    <div className="contact-container">
      <div className="image-container top">
        <img src="./contact-bg.jpg" alt="Image d'accueil" className="full-width" />
        <div className="white-square">
          <h1 className="h1noir" id="h1margin">ME CONTACTER</h1>
          <h3 className="h3noir" id="h3petit">Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact.</h3>
          <hr className="blue-line" />
          <br />
          {/* Division en deux parties */}
          <div className="row">
            <div className="col-md-6">
              <h2 className="h2noir h2margin" id='margintop'>Formulaire de contact</h2>
              <hr className="blue-line2" />
              <form className="contact-form">
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
              <h2 className="h2noir h2margin" id='margintop2'>Mes coordonnées</h2>
              <hr className="blue-line2" />
              <address style={{ textAlign: 'left', marginLeft: '40px' }}>
                <i className="fas fa-map-marker inoir" style={{ marginRight: '5px' }}></i>
                <span>40 rue Laure Diebold, 69009 Lyon, France</span>
                <br/>
                <i className="fas fa-mobile-alt inoir" style={{ marginRight: '5px' }}></i>
                <span>06 20 30 40 50</span>
              </address>
              <div style={{ marginTop: '20px' }}>
                <h2>Carte</h2>
                {/* Intégration de la carte */}
                <MapContainer center={[45.771555, 4.796121]} zoom={16} style={{ height: '300px', width: '80%', marginLeft: '40px' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[45.771555, 4.796121]}>
        <Popup>
          40 rue Laure Diebold, 69009 Lyon, France
        </Popup>
      </Marker>
    </MapContainer>
              </div>
            </div>
          </div>
        </div> {/* Carré blanc au milieu de l'image */}
      </div>
      <div className="special-footer">
        {/* Contenu du footer */}
      </div>
    </div>
  );
}

export default Contact;






  
  