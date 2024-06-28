import React, { useState } from 'react';
import './App.css';
import HomePage from './pages/home.js';
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
    <div className="App">
      {!loading && !preloading && (
        <div className="enter-screen">
          <button className="enter-home-button" onClick={handleEnter}>Enter</button>
        </div>
      )}
      {preloading && <Preloader />}
      {loading && <HomePage />}
    </div>
  );
}

export default App;
