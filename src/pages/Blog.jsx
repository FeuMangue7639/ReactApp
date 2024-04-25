const Blog = () => {
    return (
        <div>
            <img src="./banner.jpg" alt="Image" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} />
            <br/>
            <br/>
            <h1 className="h1noir">BLOG</h1>
            <h3 className="h3noir">Retrouvez ici quelques articles sur le développement web</h3> {/* Tout petit titre */}
            <hr className="ligne-bleu" /> {/* Ligne bleue */}
        
            <div className="row" id="blocrealisations">
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./coder.jpg" alt="Image 1" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Coder son site en HTML/CSS</h2>
                        <h3 className="h3noir">Cet article montre les bases à acquerir pour coder son site avec les outils et les connaissances nécessaires. Vous y trouverez toutes les informations suplémentaires.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./croissance.jpg" alt="Image 2" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Vendre ses produits sur le web</h2>
                        <h3 className="h3noir">Découvrez comment lancer votre propre boutique en ligne et maximiser vos ventes avec nos conseils pratiques.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./google.jpg" alt="Image 3" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Se positionner sur google</h2>
                        <h3 className="h3noir">Maîtrisez les techniques de référencement et améliorez votre visibilité en ligne pour atteindre les premières positions sur Google.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./screens.jpg" alt="Image 1" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Coder en responsive design</h2>
                        <h3 className="h3noir">Apprenez à créer des sites web réactifs qui s'adaptent à tous les appareils, des smartphones aux ordinateurs de bureau.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./seo.jpg" alt="Image 2" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Techniques de référencement</h2>
                        <h3 className="h3noir">Explorez les dernières méthodes de référencement pour augmenter le trafic sur votre site web et attirer davantage de clients potentiels.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="realisation">
                        <img src="./technos.png" alt="Image 3" className="img-fluid realisation-img" />
                        <h2 className="h2noir">Apprendre à coder</h2>
                        <h3 className="h3noir">Plongez dans le monde de la programmation et développez vos compétences en codage avec nos ressources pédagogiques.</h3>
                        <button className="btn btn-primary">Lire la suite</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Blog;