import React from 'react';

function John() {
  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h1 className='h1noir h1marge'>Github user</h1>
      <h2 className='h2noir'>John Doe</h2>
      <img 
        src="./bonhome.png" 
        alt="John Doe's Avatar" 
        style={{ width: '200px', height: '200px' }} 
      />
      <br/>
      <p className='pnoir'>
        As we all know, John Doe's identity is unknown. I just wanted to contribute without being known.
      </p>
      <p className='pnoir'>Abonnés : 10</p>
      <p className='pnoir'>Abonnements : 0</p>
      <p className='pnoir'>Créé le : 2016-06-09T17:14:00Z</p>
      <p className='pnoir'>Modifié le : 2021-10-12T05:01:09Z</p>
      <p className='pnoir'>
        URL repositories : <a href="https://api.github.com/users/github-john-doe/repos">https://api.github.com/users/github-john-doe/repos</a>
      </p>
    </div>
  );
}

export default John;

