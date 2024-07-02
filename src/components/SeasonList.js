import React from 'react';
import '../styles/Seasons.css'; // Ensure you have this CSS file for styling

const Seasons = () => {
  return (
    <div className="seasons">
      <div className="season-item season1">
        <img src="../images/seasons/unwavering_resolve.jpg" alt="Season 1" />
      </div>
      <div className="season-item season2">
        <img src="../images/seasons/entertainment_district.jpg" alt="Season 2" />
      </div>
      <div className="season-item season3">
        <img src="../images/seasons/swordsmith_village.jpg" alt="Season 3" />
      </div>
      <div className="season-item season4">
        <img src="../images/seasons/hashira_training.jpg" alt="Season 4" />
      </div>
    </div>
  );
};

export default Seasons;
