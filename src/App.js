import React from 'react';
import Navbar from './Components/NavBar';
import Cards from './Components/Card';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      {/* <header className="App-header">

      <h1>Maverick Move</h1>
        <p>Bringing property right to your fingertips</p>
        <textarea>City, State</textarea>
        <button>Search</button>
        
      </header>
      <body>
        <p>Tell us where you would like to move</p>
      </body> */}
    </div>
  );
}

export default App;
