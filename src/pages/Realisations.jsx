import React, { useState } from 'react'; // Import useState from 'react'

const Realisations = () => {
    // Utilisation du hook useState pour gérer l'état du compteur
   const [count, setCount] = useState(0);

    return (
        <div>
            <img src="./banner.jpg" alt="Image" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} className="top"/>
            <br/>
            <br/>
            <h1 className="h1noir">PORTFOLIO</h1>
            <h3 className="h3noir">Voici quelques uns de mes réalisations</h3> {/* Tout petit titre */}
            <hr className="ligne-bleu" /> {/* Ligne bleue */}
        
            <div className="row" id="blocrealisations">
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./fresh-food.jpg" alt="Image 1" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Fresh food</h2>
                        <h3 className="h3noir">Réalisation d'un site avec commande en ligne</h3>
                        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Voir plus</button>
                        <h3 className='h3noir'>Compteur : {count}</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./espace-bien-etre.jpg" alt="Image 2" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Restaurant Akira</h2>
                        <h3 className="h3noir">Réalisation d'un site vitrine</h3>
                        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Voir plus</button>
                        <h3 className='h3noir'>Compteur : {count}</h3>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./restaurant-japonais.jpg" alt="Image 3" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Espace bien-être</h2>
                        <h3 className="h3noir">Réalisation d'un site vitrine pour un praticien de bien-être</h3>
                        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>Voir plus</button>
                        <h3 className='h3noir'>Compteur : {count}</h3>
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
