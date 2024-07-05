import React, { useState } from 'react';
import '../styles/CardList.css';
import Card from './Card';
import Overlay from './Overlay';

const characters = [
  {
    name: "Tanjiro Kamado",
    cardDescription: "The main protagonist...",
    overlayDescription: "Tanjiro Kamado is a kind-hearted and brave young boy who strives to protect his sister and avenge his family...",
    className: "tanjiro",
    overlayClass: "tanjiro-overlay",
  },
  {
    name: "Nezuko Kamado",
    cardDescription: "Tanjiro's younger sister...",
    overlayDescription: "Nezuko Kamado is a demon who still retains her human emotions and fights to protect her brother...",
    className: "nezuko",
    overlayClass: "nezuko-overlay",
  },
  {
    name: "Zenitsu Agatsuma",
    cardDescription: "A fellow demon slayer...",
    overlayDescription: "Zenitsu Agatsuma is a cowardly boy who only fights effectively when unconscious. Despite his fears, he aims to protect his friends...",
    className: "zenitsu",
    overlayClass: "zenitsu-overlay",
  },
  {
    name: "Inosuke Hashibira",
    cardDescription: "A boar-headed warrior...",
    overlayDescription: "Inosuke Hashibira is a wild and brash fighter who was raised by boars. He loves to challenge strong opponents and is fiercely loyal to his friends...",
    className: "inosuke",
    overlayClass: "inosuke-overlay",
  },
  {
    name: "Kanao Tsuyuri",
    cardDescription: "A quiet and skilled swordswoman...",
    overlayDescription: "Kanao Tsuyuri is a calm and collected demon slayer who often relies on a coin flip to make decisions due to her traumatic past...",
    className: "kanao",
    overlayClass: "kanao-overlay",
  },
  {
    name: "Giyu Tomioka",
    cardDescription: "The Water Hashira...",
    overlayDescription: "Giyu Tomioka is a stoic and reserved demon slayer who wields water-based techniques. He believes in justice and protecting the innocent...",
    className: "giyu",
    overlayClass: "giyu-overlay",
  },
  {
    name: "Shinobu Kocho",
    cardDescription: "The Insect Hashira...",
    overlayDescription: "Shinobu Kocho is a graceful and intelligent demon slayer who uses poison to fight demons. She hides her deep-seated hatred for demons behind a kind smile...",
    className: "kocho",
    overlayClass: "shinobu-overlay",
  },
  {
    name: "Kyojuro Rengoku",
    cardDescription: "The Flame Hashira...",
    overlayDescription: "Kyojuro Rengoku is a passionate and enthusiastic warrior who values human life and fights with powerful flame-based techniques...",
    className: "rengoku",
    
  },
  {
    name: "Mitsuri Kanroji",
    cardDescription: "The Love Hashira...",
    overlayDescription: "Mitsuri Kanroji is a bubbly and emotional demon slayer known for her unique Love Breathing technique. She has immense physical strength...",
    className: "mitsuri",
    overlayClass: "mitsuri-overlay",
  },
  {
    name: "Tengen Uzui",
    cardDescription: "The Sound Hashira...",
    overlayDescription: "Tengen Uzui is a flamboyant and flashy demon slayer who uses sound-based techniques in combat. He values aesthetics and precision...",
    className: "tengen",
    overlayClass: "tengen-overlay",
  },
  {
    name: "Muzan Kibutsuji",
    cardDescription: "Demon God",
    overlayDescription: "Muzan Kibutsuji is the first demon and the progenitor of all other demons. He is ruthless, cunning, and seeks to dominate the world...",
    className: "muzan",
    overlayClass: "muzan-overlay",
  },
  {
    name: "Yorichi Sogikuni",
    cardDescription: "Breathing style God - creator of breathing techniques",
    overlayDescription: "Yorichi Sogikuni is the legendary swordsman who created the original breathing techniques. He is revered as the strongest demon slayer in history...",
    className: "yorichi",
    overlayClass: "yorichi-overlay",
  },
  {
    name: "Muichiro Tokito",
    cardDescription: "Mist Breathing - Hashira",
    overlayDescription: "Muichiro Tokito is a prodigious demon slayer who wields the Mist Breathing technique. Despite his young age, he is incredibly skilled and powerful...",
    className: "tokito",
    overlayClass: "tokito-overlay",
  },
  {
    name: "Gyomei Himejima",
    cardDescription: "Stone Breathing - Hashira",
    overlayDescription: "Gyomei Himejima is the strongest of the current Hashira, using the Stone Breathing technique. He is blind but possesses incredible strength and senses...",
    className: "gyomei",
    overlayClass: "gyomei-overlay",
  },
  {
    name: "Sanemi Sinazugawa",
    cardDescription: "Wind Breathing - Hashira",
    overlayDescription: "Sanemi Sinazugawa is a fierce and aggressive demon slayer who wields the Wind Breathing technique. His brash personality hides a deep sense of justice...",
    className: "sanemi",
    overlayClass: "sanemi-overlay",
  },
  // Add more characters as needed
  // ... [character data as provided earlier]
];

const CardList = () => {
  const [activeCharacter, setActiveCharacter] = useState(null);

  const handleCardClick = (character) => {
    setActiveCharacter(character);
  };

  const handleCloseOverlay = () => {
    setActiveCharacter(null);
  };

  return (
    <div className="characters-page">
      <div className="cards">
        {characters.map((character, index) => (
          <Card
            key={index}
            name={character.name}
            description={character.cardDescription}
            className={character.className}
            onClick={() => handleCardClick(character)}
          />
        ))}
      </div>

      {activeCharacter && (
        <Overlay
          character={activeCharacter}
          onClose={handleCloseOverlay}
        />
      )}
    </div>
  );
};

export default CardList;
