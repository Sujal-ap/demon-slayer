// demon-slayer/src/components/Header.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  const location = useLocation();
  
  let headerText = 'DEMON SLAYER';
  if (location.pathname === '/characters') {
    headerText = 'CHARACTERS';
  }
  else if (location.pathname === '/seasons') {
    headerText = 'SEASONS';
  }


  return (
    <header className="App-header">
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
