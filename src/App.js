import React from 'react';
import './App.css';
import routes from './routes';
import { connect } from 'react-redux';
import Header from './components/Header/Header';
import AuthHeader from './components/AuthHeader/AuthHeader'

function App(props) {
  
  console.log('Look at me!', props)
  return (
    <div className="App">
      <h1>This is Review Day</h1>
      {props.isLoggedIn ? <Header/> : <AuthHeader/>}
      {routes}
    </div>
  );
}


const mapStateToProps = reduxState => reduxState

export default connect(mapStateToProps)(App)
