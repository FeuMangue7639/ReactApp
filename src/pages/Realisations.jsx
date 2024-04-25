const Realisations = () => {
    return (
        <div>
            <img src="./banner.jpg" alt="Image" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} />
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
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./espace-bien-etre.jpg" alt="Image 2" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Restaurant Akira</h2>
                        <h3 className="h3noir">Réalisation d'un site vitrine</h3>
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./restaurant-japonais.jpg" alt="Image 3" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Espace bien-être</h2>
                        <h3 className="h3noir">Réalisation d'un site vitrine pour un praticien de bien-être</h3>
                        <button className="btn btn-primary">Voir plus</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Realisations;
