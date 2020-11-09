import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import CreateAnAccount from './components/CreateAnAccount'
import Login from './components/Login'
import ConnectSpotify from './components/ConnectSpotify'



class App extends Component
 {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path='/' component={LandingPage} />
          <Route exact path='/CreateAnAccount' component={CreateAnAccount} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/ConnectSpotify' component={ConnectSpotify} />

        </div>
      </BrowserRouter>
    );
  }
}

export default App;
