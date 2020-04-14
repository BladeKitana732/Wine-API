import React from 'react';
import './App.css';
import Wines from './components/Wines';

// Tasks: 
// Render the wines in the webpage. (using Wines.js to do so) 
// When someone clicks a wine display information of that single wine in the webpage. HTTP GET method.
//  Make a form to create new wines. HTTP POST method.
// Make an option to delete a chosen wine. - HTTP DELETE method.
// Your app has to use React and Axios

function App() {
  return (
    <div className="App">
      <Wines />
    </div>
  );
}

export default App;
