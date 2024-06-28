import React from 'react';

const CharacterList = () => {
  const characters = [
    { name: 'Character 1', description: 'Description 1' },
    { name: 'Character 2', description: 'Description 2' },
    // Add more characters as needed
  ];

  return (
    <div>
      <h2>Characters</h2>
      <ul>
        {characters.map((character, index) => (
          <li key={index}>
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
