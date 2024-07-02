import React from 'react';
import '../styles/Card.css';

const characters = [
  {
    name: 'Tanjiro',
    description: 'Breathing Technique: Water/Sun',
    className: 'tanjiro'
  },
  {
    name: 'Nezuko',
    description: 'Demon: Can do blood magic.',
    className: 'nezuko'
  },
  {
    name: 'Zenitsu',
    description: 'Breathing Technique: Thunder',
    className: 'zenitsu'
  },
  {
    name: 'Inosuke',
    description: 'Breathing Technique: Beast',
    className: 'inosuke'
  },
  {
    name: 'Kanao',
    description: 'Breathing Technique: Flower',
    className: 'kanao'
  },
  {
    name: 'Giyu',
    description: 'Breathing Technique: Water',
    className: 'giyu'
  },

{
  name: 'Sakonji Urokodaki',
  description: 'Water breathing Trainer',
  className: 'sakonji'
},

{
  name: 'Kyojuro Rengoku',
  description: 'flame breathing - hashira',
  className: 'rengoku'
},

{
  name: 'Tengen Uzui',
  description: 'Sound breathing - hashira',
  className: 'tengen'
}, 
{
    name: 'Muzan Kibutsuji',
    description: 'Demon God',
    className: 'muzan'
},
{
  name: 'Shinobu Kocho',
  description: 'Insect breathing - hashira',
  className: 'kocho'
},
{
  name: 'Yorichi Sogikuni',
  description: 'Breathing style God - creator of breathing techniques',
  className: 'yorichi'
}
];

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

const CardList = () => {
  return (
    <div className="cards">
      {characters.map((character, index) => (
        <Card key={index} character={character} />
      ))}
    </div>
  );
};

export default CardList;