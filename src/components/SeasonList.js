import React from 'react';

const SeasonList = () => {
  const seasons = [
    { season: 1, episodes: 12 },
    { season: 2, episodes: 12 },
    // Add more seasons as needed
  ];

  return (
    <div>
      <h2>Seasons</h2>
      <ul>
        {seasons.map((season, index) => (
          <li key={index}>
            <h3>Season {season.season}</h3>
            <p>Episodes: {season.episodes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeasonList;

