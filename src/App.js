import React from 'react';
import './App.css';
import CharacterList from './components/CharacterList';
import SeasonList from './components/SeasonList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Anime Series Info</h1>
      </header>
      <main>
        <CharacterList />
        <SeasonList />
      </main>
    </div>
  );
}

export default App;
