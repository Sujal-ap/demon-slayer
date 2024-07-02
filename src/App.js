// demon-slayer/src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home.js';
import CharactersPage from './pages/characters.js';
import SeasonsPage from './pages/seasons.js';
import Preloader from './components/Preloader.js';

function App() {
  const [loading, setLoading] = useState(false);
  const [preloading, setPreloading] = useState(false);

  const handleEnter = () => {
    setPreloading(true);
    setTimeout(() => {
      setPreloading(false);
      setLoading(true);
    }, 6000); // Preloader duration
  };

  return (
    <Router basename="/demon-slayer">
      <div className="App">
        {!loading && !preloading && (
          <div className="enter-screen">
            <button className="enter-home-button" onClick={handleEnter}>Enter</button>
          </div>
        )}
        {preloading && <Preloader />}
        {loading && (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/characters" element={<CharactersPage />} />
            <Route path="/seasons" element={<SeasonsPage />} />
          </Routes>
        )}
      </div>
    </Router>
  );
}

export default App;
