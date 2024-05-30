import React from 'react'; 

const Realisations = () => {
    

    return (
        <div>
            <img src="./banner.jpg" alt="banner" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} className="top"/>
            <br/>
            <br/>
            <h1 className="h1noir">PORTFOLIO</h1>
            <h3 className="h3noir">Voici quelques uns de mes réalisations</h3> {/* Tout petit titre */}
            <hr className="ligne-bleu" /> {/* Ligne bleue */}
        
            <div className="row justify-content-center" id="blocrealisations">
  <div className="col-md-10">
    <div className="row">
      <div className="col-sm-4">
        <div className="realisation">
          <img src="./fresh-food.jpg" alt="realisation 1" className="img-fluid realisation-img" />
          <h2 className="h2noir">Fresh food</h2>
          <h3 className="h3noir">Réalisation d'un site avec commande <br/> en ligne.</h3>
          <button className="btn btn-custom">Voir plus</button>
          <div className="info-box">
            <p>Site réalisé avec PHP et MySQL</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation">
          <img src="./espace-bien-etre.jpg" alt="realisation 2" className="img-fluid realisation-img" />
          <h2 className="h2noir">Restaurant Akira</h2>
          <h3 className="h3noir">Réalisation d'un site vitrine.</h3>
          <button className="btn btn-custom">Voir plus</button>
          <div className="info-box">
            <p>Site réalisé avec WordPress</p>
          </div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation">
          <img src="./restaurant-japonais.jpg" alt="realisation 3" className="img-fluid realisation-img" />
          <h2 className="h2noir">Espace bien-être</h2>
          <h3 className="h3noir">Réalisation d'un site vitrine pour un praticien de bien-être.</h3>
          <button className="btn btn-custom">Voir plus</button>
          <div className="info-box">
            <p>Site réalisé en HTML/CSS</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



            <div className="special-footer2">
        {/* Contenu du footer */}
      </div>
        </div>
    )
}

export default Realisations;
