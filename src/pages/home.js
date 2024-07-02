import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.css';

const HomePage = () => {
  return (
    <div className='home'>
      <Header />
      <main style={{ paddingTop: '200px' }}>
        <div className="container">
          <div className="links">
            <Link to="/characters" className="characters-link">
              Characters
            </Link>
            <Link to="/seasons" className="seasons-link">
              Seasons
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
