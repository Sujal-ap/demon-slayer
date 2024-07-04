import React from 'react';
import '../styles/overlay.css';

const Overlay = ({ character, onClose }) => {
  return (
    <div className="overlay">
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
