import React from 'react';
import './App.css';
import routes from './routes';

function App() {
  return (
    <div className="App">
      <h1>This is Review Day</h1>
      {routes}
    </div>
  );
}

export default App;
