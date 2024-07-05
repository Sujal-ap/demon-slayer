import React, { useEffect } from 'react';
import '../styles/overlay.css';

const Overlay = ({ character, onClose }) => {
  useEffect(() => {
    const blueBg = document.getElementById('blueBg');
    setTimeout(() => {
      blueBg.classList.add('active');
    }, 100); // Adjust delay as needed
  }, []);

  return (
    <div className="overlay">
      <div id="blueBg" className="blueBg"></div>
      <div className={`overlay-content ${character.className}-overlay`}>
        <button className="close-button" onClick={onClose}>X</button>
        <div className="overlay-text">
          <h3>{character.name}</h3>
          <p>{character.overlayDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
