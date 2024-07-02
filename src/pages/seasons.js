// src/pages/Seasons.js
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Seasons from '../components/SeasonList';

const SeasonsPage = () => {
  return (
    <div className='seasons'>
      <Header />
      <main style={{ paddingTop: '200px' }}>
        <Seasons />
        <div className="container">
          <h1>Seasons</h1>
          {/* Add any additional content here */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SeasonsPage;
