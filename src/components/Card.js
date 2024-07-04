import React from 'react';
import '../styles/Card.css';

const Card = ({ name, description, className, onClick }) => {
  return (
    <div className={`card ${className}`} onClick={onClick}>
      <h3 className="card-text">{name}</h3>
      <p className="card-text">{description}</p>
      <div className="colour"></div>
      <div className="colour-bottom"></div>
    </div>
  );
};

export default Card;
