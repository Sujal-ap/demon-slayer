// demon-slayer/src/pages/characters.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CardList from '../components/Card';

const CharactersPage = () => {
  return (
    <div className='characters'>
      <Header />
      <main style={{ paddingTop: '200px' }}>
        <div className="container">
          <CardList />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CharactersPage;
