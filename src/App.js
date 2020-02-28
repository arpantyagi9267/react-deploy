import React from 'react';
import profileImage from './img/arpan.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>my react app</h1>
      <h2>author:arpan tyagi</h2>
       <img src={profileImage} alt="profile-image" />
    </div>
  );
}

export default App;
