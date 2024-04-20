const Home = () => {
    return (
        <div>
            {/* Premier bloc */}
      <div className="first-block">
        <div className="image-container">
          <img src="./hero-bg.jpg" alt="Image d'accueil" className="full-width" />
          <div className="centered">
            <h1>Titre principal</h1>
            <h2>Sous-titre</h2>
          </div>
        </div>
      </div>

      {/* Deuxième bloc */}
      <div className="second-block">
        <div className="container">
          <h1>À propos</h1>
          {/* Ajoutez ici le contenu de votre deuxième bloc */}
        </div>
      </div>
        </div>
    )
}

export default Home;