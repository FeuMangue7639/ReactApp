import React, { useState } from 'react';

const MentionsLegales = () => {
    const [block1Open, setBlock1Open] = useState(false);
    const [block2Open, setBlock2Open] = useState(false);
    const [block3Open, setBlock3Open] = useState(false);

    const toggleBlock1 = () => {
        setBlock1Open(!block1Open);
    };

    const toggleBlock2 = () => {
        setBlock2Open(!block2Open);
    };

    const toggleBlock3 = () => {
        setBlock3Open(!block3Open);
    };

    return (
        <div className="container">
            <h1 className="h1noir" style={{ marginTop: '150px' }}>MENTIONS LÉGALES</h1>
            <hr className="trait-bleu" /> {/* Ligne bleue */}

            <br/>

            <div className="card mb-3">
                <div className="card-header" style={{ cursor: 'pointer' }} onClick={toggleBlock1}>
                    <h2 className='h2noir mb-0'>Éditeur du site</h2>
                </div>
                {block1Open && (
                    <div className="card-body">
                        <h2 className='h2noir mb-0 h2left'>John Doe</h2>
                        <address style={{ textAlign: 'left', marginLeft: '40px' }}>
                <i className="fas fa-map-marker inoir" style={{ marginRight: '5px' }}></i>
                <span>40 rue Laure Diebold, 69009 Lyon, France</span>
                <br/>
                <i className="fas fa-mobile-alt inoir" style={{ marginRight: '5px' }}></i>
                <a href="tel:0620304050">06 20 30 40 50</a>
                <br/>
                <i className="far fa-envelope inoir" style={{ marginRight: '5px' }}></i>
                <a href="mailto:johndoe@gmail.com">johndoe@gmail.com</a>
              </address>
                    </div>
                )}
            </div>

            <div className="card mb-3">
                <div className="card-header" style={{ cursor: 'pointer' }} onClick={toggleBlock2}>
                    <h2 className='h2noir mb-0'>Always data</h2>
                </div>
                {block2Open && (
                    <div className="card-body">
                        <p className='pnoir ppetit'>91 rue du Faubourg Saint Honoré</p>
                        <p className='pnoir ppetit'>75008 Paris</p>
                        <p className='pnoir ppetit'><a href="www.alwaysdata.com">www.alwaysdata.com</a></p>

                    </div>
                )}
            </div>

            <div className="card mb-3">
                <div className="card-header" style={{ cursor: 'pointer' }} onClick={toggleBlock3}>
                    <h2 className='h2noir mb-0'>Crédits</h2>
                </div>
                {block3Open && (
                    <div className="card-body">
                        <h2 className='h2noir mb-0 h2left'>Crédits</h2>
                        <p className='pnoir ppetit'>Site développé par John Doe</p>
                        <p className='pnoir ppetit'>Les images libres de droits sont issues du site Pixabay</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MentionsLegales;

