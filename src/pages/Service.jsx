import React from 'react';

const Service = () => {
    return (
        <div>
            
            <img src="./banner.jpg" alt="Image" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} className='top'/>
            <br/>
            <br/>
            <h1 className="h1noir">Mon offre de services</h1>
            <h3 className="h3noir">Voici les prestations sur lesquelles je peux intervenir</h3> {/* Tout petit titre */}
            <hr className="ligne-bleu" /> {/* Ligne bleue */}

            <div className="row" id="blocrealisations">
                <div className="col-sm-4">
                    <div className="realisation">
                        {/* Icône de service 1 */}
                        <i className="fas fa-tv fa-3x" id='icone'></i>
                        <br/>
                        <br/>
                        <h2 className="h2noir">UX Design</h2>
                        <h3 className="h3noir">L'UX Design est une méthode de conception centrée sur l'utilisateur. Son but est d'offrir une expérience de navigation optimale à l'internaute.</h3>
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        {/* Icône de service 2 */}
                        <i className="far fa-file-alt fa-3x" id='icone'></i>
                        <br/>
                        <br/>
                        <h2 className="h2noir">Développement web</h2>
                        <h3 className="h3noir">Le développement des sites web repose sur l'utilisation des langages HTML, CSS, JavaScript et PHP.</h3>
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        {/* Icône de service 3 */}
                        <i className="fas fa-search fa-3x" id='icone'></i>
                        <br/>
                        <br/>
                        <h2 className="h2noir">Référencement</h2>
                        <h3 className="h3noir">Le réferencement naturel d'un site, aussi appelé SEO, connsiste à mettre des techniques en oeuvre pour améliorer sa position dans les résultats des moteurs de recherche.</h3>
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
            </div>
            <div className="special-footer2">
        {/* Contenu du footer */}
      </div>
        </div>
    );
}

export default Service;
