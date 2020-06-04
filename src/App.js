import React from 'react';
import './App.css';
import routes from './routes';
import { connect } from 'react-redux';

function App(props) {
  console.log('Look at me!', props)
  return (
    <div className="App">
      <h1>This is Review Day</h1>
      {routes}
    </div>
  );
}


const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
