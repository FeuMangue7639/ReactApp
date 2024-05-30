import React from 'react';

const Blog = () => {
    return (
        <div>
    <img src="./banner.jpg" alt="baniere" style={{ width: '100%', maxWidth: '100vw', height: 'auto' }} className="top"/>
    <br/>
    <br/>
    <h1 className="h1noir">BLOG</h1>
    <h3 className="h3noir">Retrouvez ici quelques articles sur le développement web</h3>
    <hr className="ligne-bleu"/>

    <div className="row" id="blocrealisations">
      <div className="col-sm-4">
        <div className="realisation textg">
          <img src="./coder.jpg" alt="blog 1" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Coder son site en HTML/CSS</h2>
          <h3 className="h3noir">Cet article montre les bases à acquérir pour coder son site avec les outils et les connaissances nécessaires. Vous y trouverez toutes les informations supplémentaires.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 22 août 2022</p></div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation textg">
          <img src="./croissance.jpg" alt="blog 2" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Vendre ses produits sur le web</h2>
          <h3 className="h3noir">Découvrez comment lancer votre propre boutique en ligne et maximiser vos ventes avec nos conseils pratiques.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 20 août 2022</p></div>
        </div>
      </div>
      <div className="col-sm-4 margin-bottom-large">
        <div className="realisation textg">
          <img src="./google.jpg" alt="blog 3" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Se positionner sur google</h2>
          <h3 className="h3noir">Maîtrisez les techniques de référencement et améliorez votre visibilité en ligne pour atteindre les premières positions sur Google.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 1 août 2022</p></div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation textg">
          <img src="./screens.jpg" alt="blog 4" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Coder en responsive design</h2>
          <h3 className="h3noir">Apprenez à créer des sites web réactifs qui s'adaptent à tous les appareils, des smartphones aux ordinateurs de bureau.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 31 juillet 2022</p></div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation textg">
          <img src="./seo.jpg" alt="blog 5" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Techniques de référencement</h2>
          <h3 className="h3noir">Explorez les dernières méthodes de référencement pour augmenter le trafic sur votre site web et attirer davantage de clients potentiels.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 30 juillet 2022</p></div>
        </div>
      </div>
      <div className="col-sm-4">
        <div className="realisation textg">
          <img src="./technos.png" alt="blog 6" className="img-fluid realisation-img"/>
          <h2 className="h2noir">Apprendre à coder</h2>
          <h3 className="h3noir">Plongez dans le monde de la programmation et développez vos compétences en codage avec nos ressources pédagogiques.</h3>
          <button className="btn btn-primary">Lire la suite</button>
          <div className="info-box"><p>Publié le 12 juillet 2022</p></div>
        </div>
      </div>
    </div>
    <div className="special-footer2">
      {/* Contenu du footer */}
    </div>
  </div>
    )
}

export default Blog;