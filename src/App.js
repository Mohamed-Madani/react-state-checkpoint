// src/App.js
import React, { useState } from 'react';
import './App.css';

function App() {
  const [person] = useState({
    fullName: 'John Doe',
    bio: 'A passionate developer.',
    imgSrc: 'https://via.placeholder.com/150',
    profession: 'Software Engineer',
  });

  const [shows, setShows] = useState(false);

  const toggleShow = () => {
    setShows(!shows);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Person Profile</h1>
        <button onClick={toggleShow}>
          {shows ? 'Hide Profile' : 'Show Profile'}
        </button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt={person.fullName} />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <h3>{person.profession}</h3>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
