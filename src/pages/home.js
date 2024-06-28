import React from 'react';
import Card from '../components/Card.js';

const characters = [
  {
    name: 'Tanjiro',
    description: 'Breathing Technique: Water/Sun',
    className: 'tanjiro',
    imageUrl: 'https://namratapdrjs.netlify.app/scrolling-animations/assets-card/tanjiro.png'
  },
  {
    name: 'Nezuko',
    description: 'Demon: Can do blood magic.',
    className: 'nezuko',
    imageUrl: 'https://namratapdrjs.netlify.app/scrolling-animations/assets-card/nezuko.jpg'
  },
  {
    name: 'Zenitsu',
    description: 'Breathing Technique: Thunder',
    className: 'zenitsu',
    imageUrl: 'https://namratapdrjs.netlify.app/scrolling-animations/assets-card/zenitsu.jpg'
  },
];

const HomePage = () => {
  return (
    <div>
      <header className="App-header">
        <h1>DEMON SLAYER</h1>
      </header>
      <main>
        <div className="container">
          <div className="cards">
            {characters.map((character, index) => (
              <Card key={index} character={character} />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
