import React from 'react';
import '../styles/Card.css';

const Card = ({ character }) => {
  return (
    <div className={`card ${character.className}`}>
      <div className="colour"></div>
      <div className="card-text">
        <h3>{character.name}</h3>
        <p>{character.description}</p>
      </div>
      <div className="colour-bottom"></div>
    </div>
  );
};

export default Card;
